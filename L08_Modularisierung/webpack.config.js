const path = require('path'); //Absoluter Pfad, in dem das bundle.js abgelegt werden soll - Funktioniert nur mit Node.js

module.exports = {
    mode: 'development', //Damit werden wir eine nervige Warnung in der Kommandozeile los, die bei npm run build auftaucht
    devtool: 'eval-source-map', //Hier gibt man an welche Art von Source Maps man haben will. eval = gut für die Entwicklung
    entry: './src/Main.ts', //Mit diesem File fängt der Compiler an
    module: {
        rules: [ //Mit folgender Regel geben wir an, dass wir ts-files in js-files compilieren wollen
            {
                test: /\.ts$/, //Es wird getestet ob das jeweilige ts-file valide ist
                use: 'ts-loader', //Falls ja, wird der ts-loader ausgeführt um es zu compilieren
                include: [path.resolve(__dirname, 'src')] //Hier geben wir an wo unsere ts-files abgelegt sind
            }
        ]
    },
    resolve: { //Nur nötig wenn man Module bauen will
        extensions: [ //Welche extensions können aufgelöst werden
            '.ts',
            '.js'
        ]
    },
    output: {
        publicPath: 'public', //Relativer Pfad, der dem Dev-Server mitteilt, wo er seinen compilierten Code eintragen soll
        filename: 'bundle.js', //Name es JS-Files in das alles compiliert wird
        path: path.resolve(__dirname, 'public') //Hiermit erstellen wir den absoluten Pfad __dirname: abs. Pfad zur webpack.config
    }
}