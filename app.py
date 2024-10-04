import pandas as pd
from tensorflow.keras.models import load_model
import numpy as np
import joblib
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Load the model and the scaler
model = load_model('lstm_model.h5')
scaler = joblib.load('scaler.pkl')

real_test = pd.read_csv('real_test.csv')
real_test.set_index('datetime', inplace=True)

def create_sequences(data, seq_length):
    xs, ys = [], []
    for i in range(len(data) - seq_length):
        x = data[i:i + seq_length]
        y = data[i + seq_length, -1]  
        xs.append(x)
        ys.append(y)
    return np.array(xs), np.array(ys)

def prepare_model(real_test):
    scaled_real_test = scaler.transform(real_test)
    seq_length = 10  
    X_real_test, _ = create_sequences(scaled_real_test, seq_length)
    prediction = model.predict(X_real_test)
    prediction_actual = scaler.inverse_transform(np.concatenate((np.zeros((prediction.shape[0], real_test.shape[1]-1)), prediction), axis=1))[:, -1]
    return prediction_actual[-1]

def classes(value):
    lower = (value // 5) * 5
    upper = lower + 5
    return lower, upper

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print(data)
        data['total land area burnt by wildfires'] = 0.0
        new_df = pd.DataFrame(data, index=[0])  # Ensure it's a DataFrame with a single row
        global real_test  # Declare as global to modify it
        real_test = pd.concat([real_test, new_df], ignore_index=True)
        prediction = abs(prepare_model(real_test).round(2)) * 100
        lower , upper = classes(prediction)
        prefixed = "the total area burnt is ranged from " + str(lower)
        postfixed = "% to " + str(upper) + "%"
        pred = prefixed + postfixed
        return jsonify({'prediction': pred})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
