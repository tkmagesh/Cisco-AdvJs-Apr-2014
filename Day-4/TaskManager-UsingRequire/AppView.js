define(['jquery','Task','TaskView','text!appTemplate.html'], function($,Task,TaskView, appTemplate){
	return function AppView(model){
		//var _templateId = templateId;
		var _model = model;
		var that = this;
		this.$root = $("<div>");
		this.init = function(){
			this.$root.on("click","#btnAddTask",(function(){
				var taskName = this.$root.find("#txtTask").val();
				var newTask = new Task();
				newTask.id(new Date().getTime());
				newTask.name(taskName);
				_model.addTask(newTask);
			}).bind(this));

			this.$root.on("click","#btnRemoveCompleted",(function(){
				_model.removeCompletedTasks();
			}).bind(this));
			//model event bindings

			_model.addChangeListener("add",this.render.bind(this));
			_model.addChangeListener("remove",this.render.bind(this));
		};
		this.addTaskToUi = function(task){
			var newTaskView = new TaskView(task);
			newTaskView.init();
			newTaskView.render().$root.appendTo(that.$root.find("#ulTaskList"));
		};

		this.render = function(){
			//var viewHTML = $(templateId).html();
			this.$root.html(appTemplate);
			for(var i=0;i<_model.list.length;i++)
				this.addTaskToUi(_model.list[i]);
			
			return this;
		};
	}
});