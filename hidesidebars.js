Hooks.once('init', () => {
	game.settings.register("hide-sidebars", "hidechat", {
      name: "Hidden Chat",
      scope: "world",
      config: true,
      type: Boolean,
      default: false
  });
	game.settings.register("hide-sidebars", "hidecombat", {
      name: "Hidden Combat",
      scope: "world",
      config: true,
      type: Boolean,
      default: false
  });
	game.settings.register("hide-sidebars", "hidescenes", {
      name: "Hidden Scenes",
      scope: "world",
      config: true,
      type: Boolean,
      default: true
  });
	game.settings.register("hide-sidebars", "hideactors", {
      name: "Hidden Actors",
      scope: "world",
      config: true,
      type: Boolean,
      default: false
  });
	game.settings.register("hide-sidebars", "hideitems", {
      name: "Hidden Items",
      scope: "world",
      config: true,
      type: Boolean,
      default: true
  });
	game.settings.register("hide-sidebars", "hidejournal", {
      name: "Hidden Journal",
      scope: "world",
      config: true,
      type: Boolean,
      default: false
  });
	game.settings.register("hide-sidebars", "hidetables", {
      name: "Hidden Tables",
      scope: "world",
      config: true,
      type: Boolean,
      default: true
  });
	game.settings.register("hide-sidebars", "hidecards", {
      name: "Hidden Cards",
      scope: "world",
      config: true,
      type: Boolean,
      default: true
  });
	game.settings.register("hide-sidebars", "hideplaylists", {
      name: "Hidden Playlists",
      scope: "world",
      config: true,
      type: Boolean,
      default: true
  });
	game.settings.register("hide-sidebars", "hidecompendium", {
      name: "Hidden Compendiums",
      scope: "world",
      config: true,
      type: Boolean,
      default: true
  });
	game.settings.register("hide-sidebars", "hidesettings", {
      name: "Hidden Settings",
			hint: "Not recommended",
      scope: "world",
      config: true,
      type: Boolean,
      default: false,
			onChange: _ => {
        window.location.reload();
      }
  });
});
		
Hooks.on('ready', () => {
  if(game.user.isGM) return;
	if(game.settings.get("hide-sidebars", "hidechat")!=false){
		$('[data-tab=chat]').hide();
	};
	if(game.settings.get("hide-sidebars", "hidecombat")!=false){
		$('[data-tab=combat]').hide();
	};
	if(game.settings.get("hide-sidebars", "hidescenes")!=false){
		$('[data-tab=scenes]').hide();
	};
	if(game.settings.get("hide-sidebars", "hideactors")!=false){
		$('[data-tab=items]').hide();
	};
	if(game.settings.get("hide-sidebars", "hideitems")!=false){
		$('[data-tab=items]').hide();
	};
	if(game.settings.get("hide-sidebars", "hidejournal")!=false){
		$('[data-tab=journal]').hide();
	};
	if(game.settings.get("hide-sidebars", "hidetables")!=false){
		$('[data-tab=tables]').hide();
	};
	if(game.settings.get("hide-sidebars", "hidecards")!=false){
		$('[data-tab=cards]').hide();
	};
	if(game.settings.get("hide-sidebars", "hideplaylists")!=false){
		$('[data-tab=playlists]').hide();
	};
	if(game.settings.get("hide-sidebars", "hidecompendium")!=false){
		$('[data-tab=compendium]').hide();
	};
	if(game.settings.get("hide-sidebars", "hidesettings")!=false){
		$('[data-tab=settings]').hide();
	};
});