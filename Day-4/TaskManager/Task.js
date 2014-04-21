function Task(id,name,isCompleted){
		this.subscribers = {};

		this.addChangeListener = function(attrName,callbackFn){
			this.subscribers[attrName] = this.subscribers[attrName] || [];
			this.subscribers[attrName].push(callbackFn);
		}
		//var that = this;

		var triggerSubscribers = (function(attrName){
			var subscribers = this.subscribers[attrName] || [];
			var eventArgs = [].slice.call(arguments,1);
			for(var i=0;i<subscribers.length;i++)
				setTimeout((function(index,args){
					return function(){
						return subscribers[index].apply(this,args)	
					}
				})(i,eventArgs));
		}).bind(this);

		var _id = id,
			_name = name,
			_isCompleted = isCompleted,
			_isEditing = false;

		this.toggleEdit = function(){
			_isEditing = !_isEditing;
			triggerSubscribers("isEditing");
		};

		this.isEditing = function(){
			return _isEditing;
		}

		this.id = function(val){
			if (typeof val === "undefined") return _id;
			_id = val;
			triggerSubscribers("id");
		};

		this.isCompleted = function(val){
			if (typeof val === "undefined") return _isCompleted;
			_isCompleted = val;
			triggerSubscribers("isCompleted");
		};

		this.toggleCompletion = function(){
			_isCompleted = !_isCompleted;
			triggerSubscribers("isCompleted");	
		}

		this.name = function(val){
			if (typeof val === "undefined") return _name;
			_name = val;
			triggerSubscribers("name");
		};
		this.toJSON = function(){
			return {id : _id, name : _name, isCompleted: _isCompleted, isEditing : _isEditing};
		}
	}
