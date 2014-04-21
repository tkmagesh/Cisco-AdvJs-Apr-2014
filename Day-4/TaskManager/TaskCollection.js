function TaskCollection(){
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

		this.list = [];

		this.addTask = function(task){
			this.list.push(task);
			triggerSubscribers("add",task);
		};
		this.removeCompletedTasks = function(){
			for(var i=this.list.length-1;i>=0;i--){
				var task = this.list[i];
				if (task.isCompleted()){
					this.list.splice(i,1);		
					triggerSubscribers("remove");
				}
			}
		}
		this.removeTask = function(index){
			this.list.splice(index,1);
			triggerSubscribers("remove");
		}
	}