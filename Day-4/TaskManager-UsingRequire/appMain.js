require(['jquery','TaskCollection','AppView','Task'],function($,TaskCollection, AppView, Task){
	$(function(){
		  var taskCollection = new TaskCollection();
		  appView = new AppView(taskCollection);
		  appView.init();
		  $(document.body).append(appView.render().$root);
	});
});