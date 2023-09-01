# Botpress Elevenlabs Integration

This integration allows you to connect your Botpress chatbot with Elevenlabs, a popular Text-to-Speech service. With this integration, you can easily convert text messages into speech directly from your chatbot.

## Setup

To set up the integration, you will need to provide your Elevenlabs `xi-api-key`. Once the integration is set up, you can use the built-in actions to convert text into speech and more.

For more detailed instructions on how to set up and use the Botpress Elevenlabs integration, please refer to our documentation.

### Prerequisites

Before enabling the Botpress Elevenlabs Integration, please ensure that you have the following:

- A Botpress cloud account.
- `xi-api-key` generated from Elevenlabs.

### Enable Integration

To enable the Elevenlabs integration in Botpress, follow these steps:

1. Access your Botpress admin panel.
2. Navigate to the “Integrations” section.
3. Locate the Elevenlabs integration and click on “Enable” or “Configure.”
4. Provide the required `xi-api-key`.
5. Save the configuration.

## Usage

Once the integration is enabled, you can start using Elevenlabs Text-to-Speech service from your Botpress chatbot. The integration offers actions like textToSpeech (Synthesizes text to audio and then converts it to hexadecimal string), getModels and getVoices to manage conversations.

```js
// How to obtain the audio file
const fs = require('fs')
const text = 'AUDIO_DATA_IN_HEX_FORMAT'
fs.writeFileSync('audio.mp3', Buffer.from(text, 'hex'))
```

For more details and examples, refer to the Botpress and Elevenlabs documentation.

## Limitations

- Some paid features may not be available.

## Contributing

Contributions are welcome! Please submit issues and pull requests.

Enjoy seamless Text-to-Speech integration between Botpress and Elevenlabs!
