module.exports = function(){return function(data, emitter){var PRM = this;	
	var calc_turn = require("../gameplay/turns.js")(PRM);
	calc_turn.initialize(data.game_id, function(turn_data){
		PRM.io.to(data.game_id).emit('res.'+ emitter , turn_data);
	})
}}