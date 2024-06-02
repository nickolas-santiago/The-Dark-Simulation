"use strict";

var npc_pos_starting;
var npc_pos_target = {};
var npc_pos_current;
var npc_speed_per_sec;
var target_pos_dir;
var target_pos_dist;
var target_distance_modifier;
var distance_per_frame_x;
var distance_per_frame_y;

function initiate_waypoint_npc()
{
	npc_pos_current = {
		x: 50,
		y: 50
	};
	npc_speed_per_sec = 10;
	SetWaypointTarget();
}

function SetWaypointTarget()
{
	//---calculate how far the NPC will travel
	target_distance_modifier = Math.ceil((Math.random() * 10));
	target_pos_dist = (npc_speed_per_sec * target_distance_modifier);
	//---generate the NPC's new direction
	target_pos_dir = (Math.random() * (Math.PI * 2));
	//---calculate new target pos
	npc_pos_starting = npc_pos_current;
	npc_pos_target.x = (npc_pos_starting.x + (target_pos_dist * Math.cos(target_pos_dir)));
	npc_pos_target.y = (npc_pos_starting.y + (target_pos_dist * Math.sin(target_pos_dir)));
	//---calculate NPC's distance per frame
	distance_per_frame_x = ((npc_speed_per_sec * Math.cos(target_pos_dir))/fps);
	distance_per_frame_y = ((npc_speed_per_sec * Math.sin(target_pos_dir))/fps);
	console.log(distance_per_frame_x);
	console.log(distance_per_frame_y);
}


function nn()
{
	
	//target_pos_dir = (Math.random() * (Math.PI * 2));
	//console.log(target_pos_dir);
	//console.log((Math.PI * 2));
	npc_pos_current.x += (distance_per_frame_x + 2.5);
	npc_pos_current.y += (distance_per_frame_y + 2.5);
}