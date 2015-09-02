# Zorkgular

Old text-based adventure like <a href="https://www.youtube.com/watch?v=wFzg5WeSpDE&list=PLDD70139B89105635&index=1">Zork</a> but with AngularJS.

## Technologies used

- Scaffolding with Yeoman.
- Development with AngularJS. Ng-sanitize for show data with html tags.
- Style with CSS3 and Sass.
- Grunt as task runner.

## Local project

Download the repository and run `npm install & bower install`.<br>
Run `grunt serve` to run the server in local.<br>
To compile the app run `grunt build` and open the `dist` folder.

## Online project

Visit http://danielrodriguez.eu/zorkgular/
 
## Instructions

The player is in a room, and they interact by entering the following commands into an input field:

- look at room: player gets description of the room.
- look at me: player gets description of self.
- say [message]: player says message (to themselves).

You have other commands, like (for example) go. You can go to bed writing `go bed`, but not `go to bed` (action and object).
 <p>
 
Tested in Chrome, Firefox, Explorer and Opera.
