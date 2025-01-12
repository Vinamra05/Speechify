# Text-to-Speech Web App with React.js and AWS Polly

This is a web application built using React.js and AWS services. The app allows users to input text, which is then converted into speech using Amazon Polly. Additionally, AWS IAM roles are utilized to manage access and policies for interacting with AWS services.

## Features

- **Text-to-Speech Conversion:** Users can enter any text, and the app uses AWS Polly to convert the text into natural-sounding speech.
- **IAM Roles Integration:** The app securely communicates with AWS services by managing access and policies through AWS IAM roles.

## Tech Stack

- **Frontend:** React.js
- **AWS Services:**
  - Amazon Polly: For converting text into speech.
  - IAM Roles: For managing access policies to AWS resources.
  
## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- AWS account with access to Amazon Polly and IAM roles.

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/text-to-speech-web-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd text-to-speech-web-app
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Configure AWS credentials:
   - Ensure you have AWS credentials set up using the AWS CLI or environment variables.
   - Assign appropriate IAM roles and policies for using Amazon Polly.

5. Start the development server:

    ```bash
    npm start
    ```

6. Open the app in your browser at `http://localhost:3000`.

## AWS Configuration

### IAM Roles and Policies

The app interacts with AWS services through IAM roles. The following steps were taken to configure IAM:

1. **Create IAM Role:** A new IAM role is created for the app to interact with Amazon Polly.
2. **Assign Policies:** The role is given policies that grant permissions to access Amazon Polly and perform text-to-speech operations.
3. **Attach Role to Application:** The role is integrated with the React app using AWS SDK.

### Amazon Polly

Amazon Polly is used to convert text into high-quality speech. The app makes API calls to Amazon Polly using the AWS SDK for JavaScript, passing text and receiving audio output in response.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
