window.globalProvideData('slide', '{"title":"leg","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":4,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide4","width":1240,"height":800,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6gKIZF2a6A6","actionGroups":{"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[]},"ActGrpOnAllTimelinesComplete":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"6gKIZF2a6A6_5dCkij5AyBF":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5ozBvdQr6rM.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6BohCGOPsBN.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"5XDhbv5qkXu"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5XDhbv5qkXu"}}]}]},"ReviewInt_6qHY3mFgK00":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5ozBvdQr6rM"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BohCGOPsBN"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5aEEtfzKA6y.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qHY3mFgK00_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qHY3mFgK00_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6qHY3mFgK00","typea":"var","valueb":"6O8ud5HjYdW","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6O8ud5HjYdW.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6qHY3mFgK00"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6O8ud5HjYdW.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6qHY3mFgK00"}]}]}]},"ReviewIntCorrectIncorrect_6qHY3mFgK00":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5ozBvdQr6rM"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BohCGOPsBN"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6qHY3mFgK00":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6qHY3mFgK00"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6qHY3mFgK00":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5ozBvdQr6rM"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6BohCGOPsBN"},"enabled":{"type":"boolean","value":false}}]},"6qHY3mFgK00_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5aEEtfzKA6y.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6O8ud5HjYdW.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6qHY3mFgK00"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5aEEtfzKA6y.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5aEEtfzKA6y.$AttemptCount","typea":"property","valueb":2,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6qHY3mFgK00"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6gKIZF2a6A6":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5lMNSHnumuy"}}]},"NavigationRestrictionPreviousSlide_6gKIZF2a6A6":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"onallopentimelinescomplete","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnAllTimelinesComplete"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5WIKxjd9ze8","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5WIKxjd9ze8","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6O8ud5HjYdW_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6O8ud5HjYdW_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6O8ud5HjYdW_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6qHY3mFgK00"}]},{"kind":"showtimer","id":"_player.6O8ud5HjYdW_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6qHY3mFgK00","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6qHY3mFgK00"}],"elseActions":[{"kind":"exe_actiongroup","id":"6qHY3mFgK00_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6qHY3mFgK00","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6qHY3mFgK00","typea":"var","valueb":"6O8ud5HjYdW","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6O8ud5HjYdW"},"completed_slide_ref":{"type":"string","value":"_player.6WPHsHYFR6z.5uYTdIshDQ1"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6qHY3mFgK00","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6qHY3mFgK00","typea":"var","valueb":"6O8ud5HjYdW","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6O8ud5HjYdW"},"completed_slide_ref":{"type":"string","value":"_player.6WPHsHYFR6z.5uYTdIshDQ1"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6gKIZF2a6A6"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6gKIZF2a6A6"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":18,"id":"6eqVV9X2b2m"},{"kind":"audio","assetId":19,"id":"6pujbX53bCm"},{"kind":"audio","assetId":20,"id":"5XDhbv5qkXu"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":791479,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5alD1pa98dP"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qDtWPcdZVM"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5e4vMouchv4"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Wyls4yigif"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"61TnPZEhqfx"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6eqVV9X2b2m"}},{"kind":"media_play","objRef":{"type":"string","value":"6eqVV9X2b2m"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6eqVV9X2b2m"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ShpOsBOzwy"}}]},{"kind":"ontimelinetick","time":2062,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"5ozBvdQr6rM"}}]},{"kind":"ontimelinetick","time":3062,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"6BohCGOPsBN"}}]},{"kind":"ontimelinetick","time":3604,"actions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6pujbX53bCm"}},{"kind":"media_play","objRef":{"type":"string","value":"6pujbX53bCm"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6pujbX53bCm"}}]},{"kind":"ontimelinetick","time":6500,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cr6hJsLR9J"}}]},{"kind":"ontimelinetick","time":7000,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5cr6hJsLR9J"}}]},{"kind":"ontimelinetick","time":8000,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5h4X6Dk6tBc"}}]},{"kind":"ontimelinetick","time":8438,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5h4X6Dk6tBc"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":0,"id":"01","url":"story_content/5m7Z67LKA4e_80_DX2662_DY2662.swf","type":"normal","altText":"sunrise hd articulate.png","width":2047,"height":1563,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-81,"yPos":-16,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":665.5,"rotateYPos":508,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1331,"bottom":1016,"altText":"sunrise hd articulate.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1331,"height":1016,"strokewidth":0}},"width":1331,"height":1016,"resume":true,"useHandCursor":true,"id":"5alD1pa98dP"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":44,"yPos":8,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":580,"rotateYPos":392,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-5,"top":-5,"right":1164,"bottom":788,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":1}},"html5data":{"xPos":0,"yPos":0,"width":1160,"height":784,"strokewidth":8}},"width":1160,"height":784,"resume":true,"useHandCursor":true,"id":"6qDtWPcdZVM"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":17,"id":"01","url":"story_content/6c0tci5cEAw_80_DX664_DY664.swf","type":"normal","altText":"feet.png","width":236,"height":332,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":458,"yPos":96,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":166.5,"rotateYPos":234,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":333,"bottom":468,"altText":"feet.png","pngfb":false,"pr":{"l":"Lib","i":37}},"html5data":{"xPos":0,"yPos":0,"width":333,"height":468,"strokewidth":0}},"width":333,"height":468,"resume":true,"useHandCursor":true,"id":"5e4vMouchv4"},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6B9SzJSG5e6_1707919542","id":"01","linkId":"txt__default_5ozBvdQr6rM","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":194,"bottom":73,"pngfb":false,"pr":{"l":"Lib","i":39}}},{"kind":"textdata","uniqueId":"5y4lwmgXOac_343773520","id":"02","linkId":"txt__default_Selected_5ozBvdQr6rM","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":219,"bottom":79,"pngfb":false,"pr":{"l":"Lib","i":40}}}],"shapemaskId":"","xPos":271,"yPos":541,"tabIndex":5,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":149,"rotateYPos":41.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":300,"bottom":87,"altText":"Talk","pngfb":false,"pr":{"l":"Lib","i":4}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":4}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-54,"top":-17,"right":302,"bottom":89,"altText":"Talk","pngfb":false,"pr":{"l":"Lib","i":38}},"html5data":{"xPos":-54,"yPos":-17,"width":356,"height":106,"strokewidth":8}}}],"animations":[{"kind":"animation","id":"Entrance","duration":100,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"5ozBvdQr6rM","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6BohCGOPsBN.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6BohCGOPsBN._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6BohCGOPsBN"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.6gKIZF2a6A6_5dCkij5AyBF"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6rUCCa51Ayr_1158308460","id":"01","linkId":"txt__default_6BohCGOPsBN","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":202,"bottom":73,"pngfb":false,"pr":{"l":"Lib","i":24}}},{"kind":"textdata","uniqueId":"6P0hO9h4uDf_289972607","id":"02","linkId":"txt__default_Selected_6BohCGOPsBN","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":220,"bottom":84,"pngfb":false,"pr":{"l":"Lib","i":42}}}],"shapemaskId":"","xPos":690,"yPos":541,"tabIndex":6,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":149,"rotateYPos":41.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":300,"bottom":87,"altText":"Walk","pngfb":false,"pr":{"l":"Lib","i":4}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":4}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-5,"top":-27,"right":338,"bottom":89,"altText":"Walk","pngfb":false,"pr":{"l":"Lib","i":41}},"html5data":{"xPos":-5,"yPos":-27,"width":343,"height":116,"strokewidth":8}}}],"animations":[{"kind":"animation","id":"Entrance","duration":100,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"6BohCGOPsBN","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5ozBvdQr6rM.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5ozBvdQr6rM._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5ozBvdQr6rM"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.6gKIZF2a6A6_5dCkij5AyBF"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/6nVvM05npOJ_80_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1136,"yPos":698,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":2}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"6Wyls4yigif","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6WPHsHYFR6z.5lMNSHnumuy"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":2,"id":"01","url":"story_content/6nVvM05npOJ_X_80_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":12,"yPos":698,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":3}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"61TnPZEhqfx","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6ShpOsBOzwy_-1707096573","id":"01","linkId":"txt__default_6ShpOsBOzwy","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":559,"bottom":100,"pngfb":false,"pr":{"l":"Lib","i":43}}}],"shapemaskId":"","xPos":308,"yPos":24,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":301.5,"rotateYPos":52.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":608,"bottom":110,"altText":"We use our legs to?","pngfb":false,"pr":{"l":"Lib","i":12}},"html5data":{"xPos":0,"yPos":0,"width":604,"height":106,"strokewidth":8}},"width":604,"height":106,"resume":true,"useHandCursor":true,"id":"6ShpOsBOzwy"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":272,"yPos":542,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":148.5,"rotateYPos":41,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":302,"bottom":88,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":14}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":8}},"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"5cr6hJsLR9J"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":691,"yPos":542,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":148.5,"rotateYPos":41,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":302,"bottom":88,"altText":"Rectangle 3","pngfb":false,"pr":{"l":"Lib","i":15}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":8}},"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"5h4X6Dk6tBc"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6qHY3mFgK00_CorrectReview","id":"01","linkId":"6qHY3mFgK00_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":660,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":17}}}],"shapemaskId":"","xPos":0,"yPos":760,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":620,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1240,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":16}},"html5data":{"xPos":1,"yPos":1,"width":1237,"height":37,"strokewidth":2}},"width":1240,"height":40,"resume":false,"useHandCursor":true,"id":"6qHY3mFgK00_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6qHY3mFgK00_IncorrectReview","id":"01","linkId":"6qHY3mFgK00_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":669,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":19}}}],"shapemaskId":"","xPos":0,"yPos":760,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":620,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1240,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":18}},"html5data":{"xPos":1,"yPos":1,"width":1237,"height":37,"strokewidth":2}},"width":1240,"height":40,"resume":false,"useHandCursor":true,"id":"6qHY3mFgK00_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');