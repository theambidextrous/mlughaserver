window.globalProvideData('slide', '{"title":"Pick One","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":1,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide1","width":1240,"height":800,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"657U1rfZ51M","actionGroups":{"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[]},"ActGrpOnAllTimelinesComplete":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"657U1rfZ51M_5j7wkeLQqVs":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5uPQiWQbDnT.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5eshX7Lbp6H.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"6KgLBu3CVTM"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6KgLBu3CVTM"}}]}]},"ReviewInt_6e2qMtZd8J6":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5uPQiWQbDnT"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5eshX7Lbp6H"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6f9hVhv074N.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6e2qMtZd8J6_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6e2qMtZd8J6_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6e2qMtZd8J6","typea":"var","valueb":"6O8ud5HjYdW","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6O8ud5HjYdW.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6e2qMtZd8J6"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6O8ud5HjYdW.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6e2qMtZd8J6"}]}]}]},"ReviewIntCorrectIncorrect_6e2qMtZd8J6":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5uPQiWQbDnT"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5eshX7Lbp6H"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6e2qMtZd8J6":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6e2qMtZd8J6"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6e2qMtZd8J6":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5uPQiWQbDnT"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5eshX7Lbp6H"},"enabled":{"type":"boolean","value":false}}]},"6e2qMtZd8J6_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6f9hVhv074N.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6O8ud5HjYdW.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6e2qMtZd8J6"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6f9hVhv074N.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6f9hVhv074N.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6e2qMtZd8J6"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_657U1rfZ51M":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6ZU1wd5qHvU"}}]},"NavigationRestrictionPreviousSlide_657U1rfZ51M":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"onallopentimelinescomplete","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnAllTimelinesComplete"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5w8WAoUTJ8M","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5w8WAoUTJ8M","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6O8ud5HjYdW_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6O8ud5HjYdW_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6O8ud5HjYdW_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6e2qMtZd8J6"}]},{"kind":"showtimer","id":"_player.6O8ud5HjYdW_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6e2qMtZd8J6","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6e2qMtZd8J6"}],"elseActions":[{"kind":"exe_actiongroup","id":"6e2qMtZd8J6_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6e2qMtZd8J6","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6e2qMtZd8J6","typea":"var","valueb":"6O8ud5HjYdW","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6O8ud5HjYdW"},"completed_slide_ref":{"type":"string","value":"_player.6WPHsHYFR6z.5uYTdIshDQ1"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6e2qMtZd8J6","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6e2qMtZd8J6","typea":"var","valueb":"6O8ud5HjYdW","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6O8ud5HjYdW"},"completed_slide_ref":{"type":"string","value":"_player.6WPHsHYFR6z.5uYTdIshDQ1"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_657U1rfZ51M"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_657U1rfZ51M"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":4,"id":"6q4giSoxNq0"},{"kind":"audio","assetId":5,"id":"6hfngbk82il"},{"kind":"audio","assetId":6,"id":"6KgLBu3CVTM"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":791479,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6rciQsX2xzb"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ZgY2fpDdzC"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5qnZDFVXIEb"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Mq2Liw0Aqb"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ZMoPHUmsxc"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6q4giSoxNq0"}},{"kind":"media_play","objRef":{"type":"string","value":"6q4giSoxNq0"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6q4giSoxNq0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5c5UCyZ3Vzv"}}]},{"kind":"ontimelinetick","time":2521,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"5eshX7Lbp6H"}}]},{"kind":"ontimelinetick","time":3500,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"5uPQiWQbDnT"}}]},{"kind":"ontimelinetick","time":4500,"actions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6hfngbk82il"}},{"kind":"media_play","objRef":{"type":"string","value":"6hfngbk82il"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6hfngbk82il"}}]},{"kind":"ontimelinetick","time":8000,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5rvSosOIrV4"}}]},{"kind":"ontimelinetick","time":8500,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5rvSosOIrV4"}}]},{"kind":"ontimelinetick","time":9000,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5UvewvcMiAF"}}]},{"kind":"ontimelinetick","time":9500,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5UvewvcMiAF"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":0,"id":"01","url":"story_content/5m7Z67LKA4e_80_DX2662_DY2662.swf","type":"normal","altText":"sunrise hd articulate.png","width":2047,"height":1563,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-81,"yPos":-16,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":665.5,"rotateYPos":508,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1331,"bottom":1016,"altText":"sunrise hd articulate.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1331,"height":1016,"strokewidth":0}},"width":1331,"height":1016,"resume":true,"useHandCursor":true,"id":"6rciQsX2xzb"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":44,"yPos":8,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":580,"rotateYPos":392,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-5,"top":-5,"right":1164,"bottom":788,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":1}},"html5data":{"xPos":0,"yPos":0,"width":1160,"height":784,"strokewidth":8}},"width":1160,"height":784,"resume":true,"useHandCursor":true,"id":"5ZgY2fpDdzC"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/6nVvM05npOJ_80_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1136,"yPos":698,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":2}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"5qnZDFVXIEb","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6WPHsHYFR6z.6ZU1wd5qHvU"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":2,"id":"01","url":"story_content/6nVvM05npOJ_X_80_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":12,"yPos":698,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":3}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"6Mq2Liw0Aqb","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"64JLsQt8eWD_1564323383","id":"01","linkId":"txt__default_5eshX7Lbp6H","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":206,"bottom":73,"pngfb":false,"pr":{"l":"Lib","i":6}}},{"kind":"textdata","uniqueId":"5XgRV7j4Fac_-1454505295","id":"02","linkId":"txt__default_Selected_5eshX7Lbp6H","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":251,"bottom":86,"pngfb":false,"pr":{"l":"Lib","i":7}}}],"shapemaskId":"","xPos":651,"yPos":542,"tabIndex":6,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":149,"rotateYPos":41.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":300,"bottom":87,"altText":"Smell","pngfb":false,"pr":{"l":"Lib","i":4}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":4}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-5,"top":-30,"right":392,"bottom":89,"altText":"Smell","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":-5,"yPos":-30,"width":397,"height":119,"strokewidth":8}}}],"animations":[{"kind":"animation","id":"Entrance","duration":100,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"5eshX7Lbp6H","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5uPQiWQbDnT.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5uPQiWQbDnT._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5uPQiWQbDnT"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.657U1rfZ51M_5j7wkeLQqVs"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5klLEx5G6PF_-1984955195","id":"01","linkId":"txt__default_5uPQiWQbDnT","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":212,"bottom":73,"pngfb":false,"pr":{"l":"Lib","i":9}}},{"kind":"textdata","uniqueId":"6CFj7HGVnqA_708574853","id":"02","linkId":"txt__default_Selected_5uPQiWQbDnT","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":244,"bottom":82,"pngfb":false,"pr":{"l":"Lib","i":10}}}],"shapemaskId":"","xPos":279,"yPos":542,"tabIndex":5,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":149,"rotateYPos":41.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":300,"bottom":87,"altText":"Write","pngfb":false,"pr":{"l":"Lib","i":4}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":4}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-69,"top":-23,"right":302,"bottom":89,"altText":"Write","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":-69,"yPos":-23,"width":371,"height":112,"strokewidth":8}}}],"animations":[{"kind":"animation","id":"Entrance","duration":100,"hidetextatstart":true,"returntextatend":false,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"scale":{"path":[{"kind":"segment","startx":"$ScaleX","starty":"$ScaleY","dsx":"-90","dsy":"-90","endx":"100","endy":"100","dex":"0","dey":"0","startrelative":false,"endrelative":true}],"textonly":false,"useglobalaxes":true,"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"5uPQiWQbDnT","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5eshX7Lbp6H.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5eshX7Lbp6H._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5eshX7Lbp6H"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.657U1rfZ51M_5j7wkeLQqVs"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":3,"id":"01","url":"story_content/6VSoutIbvCP_80_DX360_DY360.swf","type":"normal","altText":"nose.png","width":156,"height":180,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":458,"yPos":157,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":162,"rotateYPos":187,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":324,"bottom":374,"altText":"nose.png","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":0,"yPos":0,"width":324,"height":374,"strokewidth":0}},"width":324,"height":374,"resume":true,"useHandCursor":true,"id":"5ZMoPHUmsxc"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5c5UCyZ3Vzv_-225347046","id":"01","linkId":"txt__default_5c5UCyZ3Vzv","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":569,"bottom":100,"pngfb":false,"pr":{"l":"Lib","i":13}}}],"shapemaskId":"","xPos":308,"yPos":24,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":301.5,"rotateYPos":52.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":608,"bottom":110,"altText":"We use our nose to?","pngfb":false,"pr":{"l":"Lib","i":12}},"html5data":{"xPos":0,"yPos":0,"width":604,"height":106,"strokewidth":8}},"width":604,"height":106,"resume":true,"useHandCursor":true,"id":"5c5UCyZ3Vzv"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":278,"yPos":543,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":148.5,"rotateYPos":41,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":302,"bottom":88,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":14}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":8}},"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"5UvewvcMiAF"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":652,"yPos":543,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":148.5,"rotateYPos":41,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":302,"bottom":88,"altText":"Rectangle 3","pngfb":false,"pr":{"l":"Lib","i":15}},"html5data":{"xPos":0,"yPos":0,"width":298,"height":84,"strokewidth":8}},"width":298,"height":83,"resume":true,"useHandCursor":true,"id":"5rvSosOIrV4"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6e2qMtZd8J6_CorrectReview","id":"01","linkId":"6e2qMtZd8J6_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":660,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":17}}}],"shapemaskId":"","xPos":0,"yPos":760,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":620,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1240,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":16}},"html5data":{"xPos":1,"yPos":1,"width":1237,"height":37,"strokewidth":2}},"width":1240,"height":40,"resume":false,"useHandCursor":true,"id":"6e2qMtZd8J6_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6e2qMtZd8J6_IncorrectReview","id":"01","linkId":"6e2qMtZd8J6_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":669,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":19}}}],"shapemaskId":"","xPos":0,"yPos":760,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":620,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1240,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":18}},"html5data":{"xPos":1,"yPos":1,"width":1237,"height":37,"strokewidth":2}},"width":1240,"height":40,"resume":false,"useHandCursor":true,"id":"6e2qMtZd8J6_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');