const fs = require('fs');
const data = JSON.parse(fs.readFileSync('dashboard_data.json', 'utf8'));

let ruTranslations = '';
data.questionsData.forEach(q => {
    ruTranslations += `        q${q.id}_text: "${q.text.replace(/"/g, '\\"')}",\n`;
});

Object.keys(data.optionsMap).forEach(qId => {
    const options = data.optionsMap[qId];
    Object.keys(options).forEach(optId => {
        if (optId !== 'Other') {
            ruTranslations += `        q${qId}_opt${optId}: "${options[optId].replace(/"/g, '\\"')}",\n`;
        }
    });
});

let i18n = fs.readFileSync('i18n.js', 'utf8');
i18n = i18n.replace('opt_other_label: "Укажите свой вариант"', 'opt_other_label: "Укажите свой вариант",\n' + ruTranslations);
i18n = i18n.replace('opt_other_label: "Please specify"', 'opt_other_label: "Please specify",\n' + ruTranslations); // Using Russian for English too for now

fs.writeFileSync('i18n.js', i18n);
console.log("Done");
