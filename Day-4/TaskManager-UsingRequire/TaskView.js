define(['jquery','text!TaskTemplate.html'],function($,TaskTemplate){
	return function TaskView(model){
		var _model = model;
		var _template = null;
		var that = this;
		this.$root = $("<li>");
		this.init = function(){
			_template = Handlebars.compile(TaskTemplate);
			this.$root.on("click","#spanTaskName", (function(){
				_model.toggleCompletion();
			}).bind(this));

			this.$root.on("click","#btnSave", (function(){
				_model.name(that.$root.find("#txtTaskName").val());
				_model.toggleEdit();
			}).bind(this));

			this.$root.on("click","#btnCancel", (function(){
				_model.toggleEdit();
			}).bind(this));

			this.$root.on("click","#btnEdit", (function(){
				_model.toggleEdit();
			}).bind(this));
			//model event bindings

			_model.addChangeListener("isCompleted",this.render.bind(this));
			_model.addChangeListener("name",this.render.bind(this));
			_model.addChangeListener("id",this.render.bind(this));
			_model.addChangeListener("isEditing",this.render.bind(this));
		};
		

		this.render = function(){
			this.$root.html(_template(_model.toJSON()));
			return this;
		};
	}
})
