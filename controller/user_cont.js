var User = require('../dbhelper/user_model');
var async = require("async");

module.exports = { 
	get_all: function(callback){
		User.object
			.find()
			.exec(function(err, all_user){
				callback(all_user)
				return ;
		})
	},
	delete: function(data, callback){
		User.object
			.findById(data._id)
			.exec(function(err, user){
				if(err) {
		    		callback(500)
		    		return ;
		    	}else {
		    		user.remove();
					callback(200)
					return ;
				}
		})
	},
	insert: function(data, callback){
		var userObj = new User.model(data);
	    userObj.save(function(err){
		  	if(err) {
	    		callback(500)
	    		return ;
	    	}
		});
		callback(200)
	    return;
	}
}