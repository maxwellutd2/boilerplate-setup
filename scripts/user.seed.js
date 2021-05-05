var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/mend', function() {
 
  // Load Mongoose models
  seeder.loadModels([
    '../models/user.js',
    '../models/symptom.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['user.js', 'symptom.js'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'user.js',
        'documents': [
            {
                'name': 'Sam',
                'email': 'sam@gmail.com',
                'username': 'sam',
                'password': '123456',
                'birthday': "01/02/2003",
                'symptoms': [

                ]
            },
            
        ]
    },
    {
        'model': 'symptoms.js',
        'documents': [
            {
                'soreEye': true,
                'redEye': true,
                
            }
        ]
    }
];

