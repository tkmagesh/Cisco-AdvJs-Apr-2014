function TaskView(templateId, model){
		var _model = model;
		var _templateId = templateId;
		var _template = null;
		var that = this;
		this.$root = $("<li>");
		this.init = function(){
			_template = Handlebars.compile($(_templateId).html());
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
			/*this.$root.html($(_templateId).html());
			this.$root.find("#spanTaskName").html(_model.name());
			this.$root.find("#txtTaskName").val(_model.name());
			if (_model.isEditing()){
				this.$root.find("#readOnly").hide();
				this.$root.find("#editing").show();
			} else {
				this.$root.find("#readOnly").show();
				this.$root.find("#editing").hide();
			}
			if (_model.isCompleted()){
				this.$root.find("#spanTaskName").addClass("completed");
			}
			else {
				this.$root.find("#spanTaskName").removeClass("completed");
			}*/
			this.$root.html(_template(_model.toJSON()));
			return this;
		};
	}