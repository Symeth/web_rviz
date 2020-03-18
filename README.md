# web_rviz
RVIZ on your web base on [ros-rviz](https://github.com/jstnhuang/ros-rviz)
# USAGE

1. Install Dependencies
```
npm install
npm install -g bower
bower install
```

2. Run ROS websocket brige and tf republisher:
```
roslaunch rosbridge_server rosbridge_websocket.launch
rosrun tf2_web_republisher tf2_web_republisher
```

3. Run the server
```
node server.js
```

- Open url: http://localhost:3000
