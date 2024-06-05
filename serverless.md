# serverless function code : 
const axios = require('axios');

exports.handler = async (event) => {
    try {
        // Fetch data from a third-party API
        const apiUrl = 'https://api.example.com/data';
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Process the data (for demonstration, let's just return the received data)
        const processedData = processData(data);

        // Return a response
        const responseBody = {
            message: 'Data processed successfully',
            data: processedData
        };

        return {
            statusCode: 200,
            body: JSON.stringify(responseBody)
        };
    } catch (error) {
        // Handle errors
        console.error('Error fetching or processing data:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};

function processData(data) {
    // Process the received data here (e.g., perform calculations, transform data)
    // For demonstration, let's just return the data as is
    return data;
}

In this example:

The function makes an HTTP request to a third-party API (https://api.example.com/data) using the Axios library to fetch some data.
Once the data is retrieved, it's passed to a processData function where you can perform any necessary processing or manipulation.
The processed data (or the original data if no processing is needed) is then returned as part of the HTTP response.
To deploy this function:

- Set up an AWS Lambda function as described earlier.
  1. Copy the code into the Lambda function editor.
  2. Ensure the Lambda function has permission to make outbound HTTP requests (configure the appropriate IAM role).
  3. Test the function using a test event or trigger it using an API Gateway endpoint.
  4. This example demonstrates how you can create a serverless function to interact with third-party APIs and process the received data. It's a more realistic scenario that showcases the versatility of serverless computing for handling various types of tasks.
