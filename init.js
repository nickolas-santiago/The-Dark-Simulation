"use strict";
var app = app || {};
var stage_width = 200;
var stage_height = 200;
var canvas_objects = [];
var timenn = 0;
var fps = 1;

window.onload = function()
{
	console.log("Window has loaded");
	SetCanvasObjects("aa", "#canvas_random_wandering_waypoints");
	//SetCanvasObjects("bb", "#canvas_random_wandering_direction_changing");
	console.log(canvas_objects);
	initiate_waypoint_npc();
	setInterval(function()
	{
		UpdateFrame();
	}, (1000/fps));
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
}

function UpdateFrame()
{
	canvas_objects.forEach(function(sim_canvas)
	{
		UpdateBackground(sim_canvas);
		UpdateSimulation(sim_canvas);
	});
	nn();
}

function UpdateBackground(sim_canvas_)
{
	sim_canvas_.context.save();
		sim_canvas_.context.fillStyle = "red";
		sim_canvas_.context.fillRect(0, 0, sim_canvas_.canvas.width, sim_canvas_.canvas.height);
		console.log("fill background");
	sim_canvas_.context.restore();
}

function UpdateSimulation(sim_canvas_)
{
	sim_canvas_.context.save();
		sim_canvas_.context.fillStyle = "black";
		sim_canvas_.context.arc(npc_pos_current.x, npc_pos_current.y, 50, (0 * Math.PI), (2 * Math.PI));
		sim_canvas_.context.fill();
		sim_canvas_.context.arc(npc_pos_target.x, npc_pos_target.y, 50, (0 * Math.PI), (2 * Math.PI));
		sim_canvas_.context.fill();
		console.log("update circle");
	sim_canvas_.context.restore();
}