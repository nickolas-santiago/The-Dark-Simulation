"use strict";
var app = app || {};
var stage_width = 200;
var stage_height = 200;
var canvas_objects = [];
var timenn = 0;

window.onload = function()
{
	console.log("hello");
	SetCanvasObjects("aa", "#canvas_random_wandering_waypoints");
	SetCanvasObjects("bb", "#canvas_random_wandering_direction_changing");
	console.log(canvas_objects);
	
}

function SetCanvasObjects(canvas_name_, canvas_id_)
{
	var canvas_object = {};
	var canvas_name = canvas_name_;
	var canvas = document.querySelector(canvas_id_);
	var context = canvas.getContext('2d');
	canvas_object.canvas_name = canvas_name;
	canvas_object.canvas = canvas;
	canvas_object.context = context;
	canvas.width = stage_width;
	canvas.height = stage_height;
	canvas_objects.push(canvas_object);
	UpdateFrame();
}

function UpdateFrame()
{
	//requestAnimationFrame();
	//canvas_objectsEach
	timenn++;
	UpdateSimulation();
	canvas_objects.forEach(function(sim_canvas)
	{
		console.log(sim_canvas);
		UpdateBackground(sim_canvas)
	});
	console.log("one second)");
}

function UpdateSimulation()
{
	if(timenn == 60)
	{
		console.log("one second)");
	}
}

function UpdateBackground(sim_canvas_)
{
	sim_canvas_.context.save();
	sim_canvas_.context.fillStyle = "red";
	sim_canvas_.context.fillRect(0, 0, sim_canvas_.canvas.width, sim_canvas_.canvas.height);
	sim_canvas_.context.restore();
}


window.requestAnimationFrame(UpdateFrame);