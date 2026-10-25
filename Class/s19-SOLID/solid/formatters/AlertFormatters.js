export class AlertManager {
    static formaText(sensorData) {
        return `[ALERT] Senor ${sensorData.id} exceeded limit! Value: ${sensorData.reading}`;
    }

    static formatHTML(sensorData) {
        return `
            <div style="border: 2px solid red; padding: 15px; font-family: sans-serif;">
                <h2`;
    }
}