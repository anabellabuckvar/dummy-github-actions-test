const fs = require('fs');

module.exports = () => {
    const outputsFile = fs.readFileSync('outputs.json').toString();
    const outputs = JSON.parse(outputsFile);
    const webhook = Object.values(outputs['auto-builder-stack-enhancedApp-stg-DOP-3977-webhooks'])[0]
    return webhook
}
