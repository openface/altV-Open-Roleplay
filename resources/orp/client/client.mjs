/* eslint-disable no-unused-vars */
import * as alt from 'alt';
import * as native from 'natives';
import { showCursor } from '/client/utility/cursor.mjs';
import { Ped } from '/client/systems/peds.mjs';

alt.log('Loaded: client.mjs');

// Import Events that need to be imported.
// Importing these pretty much imports the rest.
import * as serverEvents from '/client/serverEvents/events.mjs';
import * as eventsDisconnect from '/client/events/disconnect.mjs';
import * as eventsUpdate from '/client/events/update.mjs';
import * as keybinds from '/client/events/keybinds.mjs';
import * as eventsConnectionComplete from '/client/events/connectionComplete.mjs';
import * as panelsTrade from '/client/panels/trade.mjs';
import * as panelsInventory from '/client/panels/vehicleinventory.mjs';
import * as systemsArrest from '/client/systems/arrest.mjs';
import * as systemsEquip from '/client/systems/equip.mjs';
import * as systemsInteraction from '/client/systems/interaction.mjs';
import * as systemsWeather from '/client/systems/weather.mjs';
import * as systemsCallbacks from '/client/systems/callbacks.mjs';
import * as systemsContext from '/client/systems/context.mjs';
import * as systemsCombat from '/client/systems/combat.mjs';
import * as systemsDoors from '/client/systems/doors.mjs';
import * as systemsInteriors from '/client/systems/interiors.mjs';
import * as systemsJob from '/client/systems/job.mjs';
import * as systemsRefinery from '/client/systems/refinery.mjs';
import * as systemsLumber from '/client/systems/lumber.mjs';
import * as systemsShop from '/client/systems/shop.mjs';
import * as systemsSkills from '/client/systems/skills.mjs';
import * as systemsTime from '/client/systems/time.mjs';
import * as systemsProps from '/client/systems/props.mjs';
import * as systemsSkyCam from '/client/systems/skycam.mjs';
import * as utilitySandbox from '/client/utility/sandbox.mjs';
import * as hud from '/client/hud/hud.mjs';
import * as discord from '/client/panels/discord.mjs';

// Context
import * as contextmenuObject from '/client/contextmenus/object.mjs';
import * as contextmenuPed from '/client/contextmenus/ped.mjs';
import * as contextmenuVehicle from '/client/contextmenus/vehicle.mjs';
import * as contextmenuPlayer from '/client/contextmenus/player.mjs';

// Extender
import * as systemsObjectExtender from '/client/systems/objectextender.mjs';
