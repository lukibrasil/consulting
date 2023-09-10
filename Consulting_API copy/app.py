

from flask import Flask, render_template, request, jsonify, session

from dotenv import load_dotenv
import os
import openai
app = Flask(__name__)

load_dotenv('/home/yourusername/mysite/.env')
app.config['SECRET_KEY'] = 'your_secret_key'

openai.api_key = os.environ.get('OPENAI_API_KEY')


with open('/home/lucasstudious/mysite/large_text.txt', 'r') as file:
    large_text = file.read()


def chatgpt(messages):
    messages.insert(0, {"role": "system", "content": large_text})
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    return response['choices'][0]['message']['content']

@app.route('/')
def landing():
    return render_template('landing.html')

@app.route('/first_case')
def first_case():
    session.clear()
    return render_template('first_case.html')

@app.route('/start_conversation', methods=['GET'])
def start_conversation():
    session['messages'] = []
    # Insert a user message first
    response = chatgpt(session['messages'])
    session['messages'].append({"role": "assistant", "content": response})

    return jsonify({'response': response})


@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.form.get('message')
    if 'messages' not in session:
        session['messages'] = []

    session['messages'].append({"role": "user", "content": user_message})
    response = chatgpt(session['messages'])

    # Define a dictionary mapping phrases to images
    phrase_to_image = {
        "phrase 1": "image1.png",
        "phrase 2": "image2.png",
        # Add more phrases and corresponding images here...
    }

    # Check if any of the phrases exist in the user's message and add corresponding image if it does
    for phrase, image_name in phrase_to_image.items():
        if phrase in user_message:
            response += '<img src="/path_to_image/' + image_name + '" alt="Image Description">'

    session['messages'].append({"role": "assistant", "content": response})

    return jsonify({'response': response})



@app.route('/clear_session', methods=['GET', 'POST'])
def clear_session():
    session.clear()
    return jsonify({'response': "Session cleared"})



if __name__ == '__main__':
    app.run(debug=True)
