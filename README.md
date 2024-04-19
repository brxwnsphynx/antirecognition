# antirecognition
A response to biased algorithms, where facial data is obscured to safeguard privacy and mitigate bias entirely.
This prototype is a response to biased facial recognition algorithms, aiming to safeguard privacy and mitigate bias by obscuring facial features in real-time. The project creates an interactive application using p5.js and ML5.js that detects faces in a live video stream and applies a blur effect to make them unrecognizable.

## reflective documentation

The existing algorithmic biases in facial recognition technologies have a disproportionately negative impact on marginalized groups, particularly people of colour, and show specific problems in correctly identifying women with darker skin tones (Buolamwini & Gebru, 2018). These prejudices uphold societal inequalities and foster harmful attitudes. Facial recognition technology is widely utilized in governance and surveillance, yet major concerns about algorithmic biases, privacy invasions, and human rights violations still exist. This work aims to interfere with facial recognition systems by making faces unrecognizable rather than removing existing biases or encouraging surveillance. A proactive strategy inspired by Paul Marks' article "Can the Biases in Facial Recognition Be Fixed; Also, Should They?" (Marks, 2021). The project creates an interactive real-time face detection and manipulation application using p5.js and ML5.js.

The code uses a blur filter to mask facial characteristics and real-time face detection to construct an anti-facial recognition prototype. To enable continuous environment monitoring, the process starts with the video capture components being initialized to record live footage from the camera. The ML5.faceApi() method is called at setup to initiate face recognition, which makes it easier to recognize face regions in the video stream. This is an important step that highlights the fundamental operation of the system since it lays the groundwork for other actions that are taken to impede facial recognition algorithms. When a face becomes visible, the gotResults() method launches in. It uses the filter() function with the BLUR argument to add a blur effect dynamically to the facial parts that have been identified. This computational logic dynamically modifies facial features as a tactical resistance against the invasive capabilities of facial recognition systems.

To achieve its anti-recognition goals, the computational logic of the code carefully blends several technological functions with syntactical features. Initially, the video capture component establishes a direct link with the camera to acquire visual data continuously. Once this data is received, machine learning algorithms are applied using the ML5.faceApi() method to analyze and recognize faces in the video stream. 

Once recognition is complete, the blur filter is applied over the detected face regions using the gotResults() method, hiding significant characteristics like the mouth, nose, and eyes. The deliberate use of the BLUR filter results in visual distortion that retains facial structure and aids the anti-recognition objective. The visualization carefully considers privacy protection and operational requirements to safeguard user privacy while maintaining structure.

## installation

1. Clone the repository to your local machine:

git clone https://github.com/brwxnsphynx/antirecognition

2. Open the `index.html` file in a web browser.

## usage

- Allow access to your webcam when prompted.
- The application will automatically detect faces in the video stream and apply a blur effect to obscure them.
- Move to the camera to see the blur effect in action.

## references

- Marks, P. (2021). Can the Biases in Facial Recognition Be Fixed; Also, Should They? Communications of the ACM, 64(3), 20-22. DOI: 10.1145/3446877
- Face API Example ml5 by rios on p5.js. Available at: [https://editor.p5js.org/rios/sketches/QH1ch5GFr]
- Buolamwini, J., & Gebru, T. (2018). "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification." Proceedings of Machine Learning Research, 81, 1-15
- Crawford, K., & Paglen, T. (2019). "Excavating AI: The politics of images in machine
