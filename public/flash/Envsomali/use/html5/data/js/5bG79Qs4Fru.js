window.globalProvideData('slide', '{"title":"EARS","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"tween","slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":3,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"5alaCn6K55E","lmsId":"Slide3","width":1240,"height":800,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5bG79Qs4Fru","actionGroups":{"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[]},"ActGrpOnAllTimelinesComplete":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"5bG79Qs4Fru_5amTfL9MzKB":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"63J0Nk9w5xx.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5oqH2UPcvzW.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"6kkYXAgN0D4"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6kkYXAgN0D4"}}]}]},"ReviewInt_5wJ6lsNJ7It":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5oqH2UPcvzW"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"63J0Nk9w5xx"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5ixxfbA2eT2.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5wJ6lsNJ7It_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5wJ6lsNJ7It_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5wJ6lsNJ7It","typea":"var","valueb":"6O8ud5HjYdW","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6O8ud5HjYdW.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5wJ6lsNJ7It"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6O8ud5HjYdW.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5wJ6lsNJ7It"}]}]}]},"ReviewIntCorrectIncorrect_5wJ6lsNJ7It":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5oqH2UPcvzW"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"63J0Nk9w5xx"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5wJ6lsNJ7It":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5wJ6lsNJ7It"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5wJ6lsNJ7It":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5oqH2UPcvzW"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"63J0Nk9w5xx"},"enabled":{"type":"boolean","value":false}}]},"5wJ6lsNJ7It_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5ixxfbA2eT2.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6O8ud5HjYdW.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5wJ6lsNJ7It"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5ixxfbA2eT2.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5ixxfbA2eT2.$AttemptCount","typea":"property","valueb":2,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5wJ6lsNJ7It"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5bG79Qs4Fru":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6gKIZF2a6A6"}}]},"NavigationRestrictionPreviousSlide_5bG79Qs4Fru":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"onallopentimelinescomplete","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnAllTimelinesComplete"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5w8WAoUTJ8M","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5w8WAoUTJ8M","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6O8ud5HjYdW_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6O8ud5HjYdW_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6O8ud5HjYdW_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5wJ6lsNJ7It"}]},{"kind":"showtimer","id":"_player.6O8ud5HjYdW_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5wJ6lsNJ7It","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5wJ6lsNJ7It"}],"elseActions":[{"kind":"exe_actiongroup","id":"5wJ6lsNJ7It_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5wJ6lsNJ7It","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5wJ6lsNJ7It","typea":"var","valueb":"6O8ud5HjYdW","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6O8ud5HjYdW"},"completed_slide_ref":{"type":"string","value":"_player.6WPHsHYFR6z.5uYTdIshDQ1"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5wJ6lsNJ7It","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5wJ6lsNJ7It","typea":"var","valueb":"6O8ud5HjYdW","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6O8ud5HjYdW"},"completed_slide_ref":{"type":"string","value":"_player.6WPHsHYFR6z.5uYTdIshDQ1"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5bG79Qs4Fru"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5bG79Qs4Fru"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":14,"id":"5cfnMcqd2kM"},{"kind":"audio","assetId":15,"id":"6N1ZtuJMDfd"},{"kind":"audio","assetId":16,"id":"6kkYXAgN0D4"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":791479,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YzoHAx0k0B"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5stBwYWpFRf"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Iza3wo8tni"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5qnSIXmFta0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"67yGNOORLCG"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6X6ltw1khk2"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"5cfnMcqd2kM"}},{"kind":"media_play","objRef":{"type":"string","value":"5cfnMcqd2kM"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5cfnMcqd2kM"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69aHBDXAmPR"}}]},{"kind":"ontimelinetick","time":2500,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"5oqH2UPcvzW"}}]},{"kind":"ontimelinetick","time":3250,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"63J0Nk9w5xx"}}]},{"kind":"ontimelinetick","time":3729,"actions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6N1ZtuJMDfd"}},{"kind":"media_play","objRef":{"type":"string","value":"6N1ZtuJMDfd"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6N1ZtuJMDfd"}}]},{"kind":"ontimelinetick","time":6750,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6f3oilbd9y4"}}]},{"kind":"ontimelinetick","time":7250,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6f3oilbd9y4"}}]},{"kind":"ontimelinetick","time":7500,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6h3m14dGEE8"}}]},{"kind":"ontimelinetick","time":7875,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6h3m14dGEE8"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":0,"id":"01","url":"story_content/5m7Z67LKA4e_80_DX2662_DY2662.swf","type":"normal","altText":"sunrise hd articulate.png","width":2047,"height":1563,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-81,"yPos":-16,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":665.5,"rotateYPos":508,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1331,"bottom":1016,"altText":"sunrise hd articulate.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1331,"height":1016,"strokewidth":0}},"width":1331,"height":1016,"resume":true,"useHandCursor":true,"id":"5YzoHAx0k0B"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":44,"yPos":8,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":580,"rotateYPos":392,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-5,"top":-5,"right":1164,"bottom":788,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":1}},"html5data":{"xPos":0,"yPos":0,"width":1160,"height":784,"strokewidth":8}},"width":1160,"height":784,"resume":true,"useHandCursor":true,"id":"5stBwYWpFRf"},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6HwiqFSZ0DD_-1585047934","id":"01","linkId":"txt__default_5oqH2UPcvzW","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":201,"bottom":73,"pngfb":false,"pr":{"l":"Lib","i":30}}},{"kind":"textdata","uniqueId":"6Uq6RUpHWEN_672431809","id":"02","linkId":"txt__default_Selected_5oqH2UPcvzW","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":226,"bottom":86,"pngfb":false,"pr":{"l":"Lib","i":31}}}],"shapemaskId":"","xPos":287,"yPos":542,"tabIndex":7,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":149,"rotateYPos":41.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":300,"bottom":87,"altText":"Hear","pngfb":false,"pr":{"l":"Lib","i":4}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":4}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-54,"top":-31,"right":302,"bottom":89,"altText":"Hear","pngfb":false,"pr":{"l":"Lib","i":29}},"html5data":{"xPos":-54,"yPos":-31,"width":356,"height":120,"strokewidth":8}}}],"animations":[{"kind":"animation","id":"Entrance","duration":100,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"5oqH2UPcvzW","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.63J0Nk9w5xx.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.63J0Nk9w5xx._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.63J0Nk9w5xx"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.5bG79Qs4Fru_5amTfL9MzKB"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5VqWKssEALA_1775083270","id":"01","linkId":"txt__default_63J0Nk9w5xx","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":189,"bottom":73,"pngfb":false,"pr":{"l":"Lib","i":21}}},{"kind":"textdata","uniqueId":"5yAv8aOLNFE_330993308","id":"02","linkId":"txt__default_Selected_63J0Nk9w5xx","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":225,"bottom":83,"pngfb":false,"pr":{"l":"Lib","i":33}}}],"shapemaskId":"","xPos":682,"yPos":542,"tabIndex":8,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":149,"rotateYPos":41.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":300,"bottom":87,"altText":"See","pngfb":false,"pr":{"l":"Lib","i":4}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":4}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-5,"top":-25,"right":374,"bottom":89,"altText":"See","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-5,"yPos":-25,"width":379,"height":114,"strokewidth":8}}}],"animations":[{"kind":"animation","id":"Entrance","duration":100,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"63J0Nk9w5xx","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5oqH2UPcvzW.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5oqH2UPcvzW._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5oqH2UPcvzW"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.5bG79Qs4Fru_5amTfL9MzKB"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/6nVvM05npOJ_80_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1136,"yPos":698,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":2}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"6Iza3wo8tni","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6WPHsHYFR6z.6gKIZF2a6A6"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":2,"id":"01","url":"story_content/6nVvM05npOJ_X_80_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":12,"yPos":698,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":3}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"5qnSIXmFta0","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":12,"id":"01","url":"story_content/6ibAVYuxo9n_80_DX408_DY408.swf","type":"normal","altText":"ear.png","width":152,"height":204,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":685,"yPos":160,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":196,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":292,"bottom":392,"altText":"ear.png","pngfb":false,"pr":{"l":"Lib","i":34}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":392,"strokewidth":0}},"width":292,"height":392,"resume":true,"useHandCursor":true,"id":"67yGNOORLCG"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":13,"id":"01","url":"story_content/6ibAVYuxo9n_X_80_DX408_DY408.swf","type":"normal","altText":"ear.png","width":152,"height":204,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":260,"yPos":160,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":153.5,"rotateYPos":196,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":307,"bottom":392,"altText":"ear.png","pngfb":false,"pr":{"l":"Lib","i":35}},"html5data":{"xPos":0,"yPos":0,"width":307,"height":392,"strokewidth":0}},"width":307,"height":392,"resume":true,"useHandCursor":true,"id":"6X6ltw1khk2"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"69aHBDXAmPR_1372226324","id":"01","linkId":"txt__default_69aHBDXAmPR","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":563,"bottom":100,"pngfb":false,"pr":{"l":"Lib","i":36}}}],"shapemaskId":"","xPos":308,"yPos":24,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":301.5,"rotateYPos":52.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":608,"bottom":110,"altText":"We use our ears to?","pngfb":false,"pr":{"l":"Lib","i":12}},"html5data":{"xPos":0,"yPos":0,"width":604,"height":106,"strokewidth":8}},"width":604,"height":106,"resume":true,"useHandCursor":true,"id":"69aHBDXAmPR"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":287,"yPos":542,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":148.5,"rotateYPos":41,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":302,"bottom":88,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":14}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":8}},"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"6f3oilbd9y4"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":682,"yPos":542,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":148.5,"rotateYPos":41,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":302,"bottom":88,"altText":"Rectangle 3","pngfb":false,"pr":{"l":"Lib","i":15}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":8}},"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"6h3m14dGEE8"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5wJ6lsNJ7It_CorrectReview","id":"01","linkId":"5wJ6lsNJ7It_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":660,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":17}}}],"shapemaskId":"","xPos":0,"yPos":760,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":620,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1240,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":16}},"html5data":{"xPos":1,"yPos":1,"width":1237,"height":37,"strokewidth":2}},"width":1240,"height":40,"resume":false,"useHandCursor":true,"id":"5wJ6lsNJ7It_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5wJ6lsNJ7It_IncorrectReview","id":"01","linkId":"5wJ6lsNJ7It_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":669,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":19}}}],"shapemaskId":"","xPos":0,"yPos":760,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":620,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1240,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":18}},"html5data":{"xPos":1,"yPos":1,"width":1237,"height":37,"strokewidth":2}},"width":1240,"height":40,"resume":false,"useHandCursor":true,"id":"5wJ6lsNJ7It_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","animations":[{"kind":"animation","id":"5alaCn6K55E","duration":700,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":700,"alpha":{"path":[{"kind":"segment","start":"0","dstart":"0","end":"100","dend":"0"}],"duration":700,"easing":"linear","easingdir":"easein"}}]}],"useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');