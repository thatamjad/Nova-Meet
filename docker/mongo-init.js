// MongoDB initialization script
db = db.getSiblingDB('nova_meet');

// Create collections
db.createCollection('users');
db.createCollection('meetings');
db.createCollection('recordings');
db.createCollection('chat_messages');

// Create indexes for better performance
db.users.createIndex({ "email": 1 }, { unique: true });
db.users.createIndex({ "username": 1 }, { unique: true });
db.meetings.createIndex({ "meetingId": 1 }, { unique: true });
db.meetings.createIndex({ "hostId": 1 });
db.meetings.createIndex({ "createdAt": 1 });
db.chat_messages.createIndex({ "meetingId": 1 });
db.chat_messages.createIndex({ "timestamp": 1 });
db.recordings.createIndex({ "meetingId": 1 });

// Insert sample data (optional)
db.users.insertOne({
  username: "admin",
  email: "admin@nova-meet.com",
  password: "$2b$10$hash", // This should be properly hashed
  role: "admin",
  createdAt: new Date(),
  isActive: true
});

print("Database initialized successfully!");
