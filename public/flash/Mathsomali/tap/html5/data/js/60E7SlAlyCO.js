window.globalProvideData('slide', '{"title":"Pick One","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":8,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide8","width":1300,"height":812,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"60E7SlAlyCO","actionGroups":{"60E7SlAlyCO_5d6O4ZTbeue":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5Y5qYBKgbbj.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6e5Q3c6qoQ4.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5tlfd0DnTm2.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"5VsBvDPo35o"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5VsBvDPo35o"}}]}]},"ReviewInt_6pqGcL99a2Z":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6e5Q3c6qoQ4"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5tlfd0DnTm2"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Y5qYBKgbbj"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"64uuSPggy8t.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6pqGcL99a2Z_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6pqGcL99a2Z_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6pqGcL99a2Z","typea":"var","valueb":"5dfm3L3Xzzk","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5dfm3L3Xzzk.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6pqGcL99a2Z"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5dfm3L3Xzzk.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6pqGcL99a2Z"}]}]}]},"ReviewIntCorrectIncorrect_6pqGcL99a2Z":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6e5Q3c6qoQ4"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5tlfd0DnTm2"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Y5qYBKgbbj"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6pqGcL99a2Z":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6pqGcL99a2Z"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6pqGcL99a2Z":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6e5Q3c6qoQ4"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5tlfd0DnTm2"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Y5qYBKgbbj"},"enabled":{"type":"boolean","value":false}}]},"6pqGcL99a2Z_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"64uuSPggy8t.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5dfm3L3Xzzk.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6pqGcL99a2Z"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"64uuSPggy8t.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"64uuSPggy8t.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6pqGcL99a2Z"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_60E7SlAlyCO":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6CdLPyevDxV"}}]},"NavigationRestrictionPreviousSlide_60E7SlAlyCO":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5dfm3L3Xzzk.$QuizComplete","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.5dfm3L3Xzzk_timer"},{"kind":"showtimer","id":"_player.5dfm3L3Xzzk_timer"}]},{"kind":"media_play","objRef":{"type":"string","value":"6LVCFUZwgl1"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6LVCFUZwgl1"}}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6cK5kjsjGm2","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6cK5kjsjGm2","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6pqGcL99a2Z","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6pqGcL99a2Z"}],"elseActions":[{"kind":"exe_actiongroup","id":"6pqGcL99a2Z_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6pqGcL99a2Z","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6pqGcL99a2Z","typea":"var","valueb":"5dfm3L3Xzzk","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5dfm3L3Xzzk"},"completed_slide_ref":{"type":"string","value":"_player.5cskvBHmA3j.6fwoxKTrSa9"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6pqGcL99a2Z","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6pqGcL99a2Z","typea":"var","valueb":"5dfm3L3Xzzk","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5dfm3L3Xzzk"},"completed_slide_ref":{"type":"string","value":"_player.5cskvBHmA3j.6fwoxKTrSa9"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_60E7SlAlyCO"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_60E7SlAlyCO"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":34,"id":"5VsBvDPo35o"},{"kind":"audio","assetId":35,"id":"6LVCFUZwgl1"},{"kind":"audio","assetId":36,"id":"6Sxeuvet5PZ"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":791479,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KNwprZg5QV"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69L8grGtdNH"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6RoFkizLEzx"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6UHf5lqd5QO"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qEUjX7UgMy"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qEUjX7UgMy.6UOFZNeayzs"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qEUjX7UgMy.5vZ7BsKHXCy"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qEUjX7UgMy.67xUnTEtD5j"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Y5qYBKgbbj"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6e5Q3c6qoQ4"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5tlfd0DnTm2"}}]},{"kind":"ontimelinetick","time":2500,"actions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6Sxeuvet5PZ"}},{"kind":"media_play","objRef":{"type":"string","value":"6Sxeuvet5PZ"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6Sxeuvet5PZ"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":9,"id":"01","url":"story_content/6cQ1zs17CdZ_72_DX2480_DY2480.swf","type":"normal","altText":"hang bg-01.png","width":1240,"height":800,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-8,"yPos":-9,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":658,"rotateYPos":415,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1316,"bottom":830,"altText":"hang bg-01.png","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":0,"yPos":0,"width":1316,"height":830,"strokewidth":0}},"width":1316,"height":830,"resume":true,"useHandCursor":true,"id":"6KNwprZg5QV"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/6nVvM05npOJ_72_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1179,"yPos":706,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"69L8grGtdNH","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5cskvBHmA3j.6CdLPyevDxV"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":2,"id":"01","url":"story_content/6nVvM05npOJ_X_72_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":46,"yPos":706,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":7}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"6RoFkizLEzx","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6UHf5lqd5QO_839606129","id":"01","linkId":"txt__default_6UHf5lqd5QO","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":651,"bottom":112,"pngfb":false,"pr":{"l":"Lib","i":35}}}],"shapemaskId":"","xPos":295,"yPos":20,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":363,"rotateYPos":54.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-8,"top":-8,"right":735,"bottom":118,"altText":"Tap number eight","pngfb":false,"pr":{"l":"Lib","i":34}},"html5data":{"xPos":0,"yPos":0,"width":727,"height":110,"strokewidth":14}},"width":727,"height":110,"resume":true,"useHandCursor":true,"id":"6UHf5lqd5QO"},{"kind":"objgroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":201.5,"rotateYPos":224,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-9,"right":413,"bottom":458,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":26}},"html5data":{"xPos":0,"yPos":0,"width":404,"height":449,"strokewidth":17}},"width":404,"height":449,"resume":true,"useHandCursor":true,"id":"6UOFZNeayzs"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":404,"yPos":0,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":201.5,"rotateYPos":224,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-10,"top":-10,"right":414,"bottom":459,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":0,"yPos":0,"width":404,"height":449,"strokewidth":19}},"width":404,"height":449,"resume":true,"useHandCursor":true,"id":"5vZ7BsKHXCy"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":808,"yPos":0,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":201.5,"rotateYPos":224,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-11,"top":-11,"right":415,"bottom":461,"altText":"Rectangle 3","pngfb":false,"pr":{"l":"Lib","i":36}},"html5data":{"xPos":0,"yPos":0,"width":404,"height":450,"strokewidth":21}},"width":404,"height":449,"resume":true,"useHandCursor":true,"id":"67xUnTEtD5j"}],"accType":"text","altText":"Group\\r\\n 1","shapemaskId":"","xPos":39,"yPos":182,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":606,"rotateYPos":224.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"width":1212,"height":449,"resume":true,"useHandCursor":true,"id":"6qEUjX7UgMy"},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":15,"id":"01","url":"story_content/6IySJMEYqkp_72_DX770_DY770.swf","type":"normal","altText":"number-06.png","width":400,"height":400,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":856,"yPos":213,"tabIndex":9,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":192.5,"rotateYPos":192.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":385,"bottom":385,"altText":"number-06.png","pngfb":false,"pr":{"l":"Lib","i":19}},"html5data":{"xPos":0,"yPos":0,"width":385,"height":385,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":385,"bottom":385,"altText":"number-06.png","pngfb":false,"pr":{"l":"Lib","i":20}},"html5data":{"xPos":0,"yPos":0,"width":385,"height":385,"strokewidth":0}}}],"width":385,"height":385,"resume":true,"useHandCursor":true,"id":"5Y5qYBKgbbj","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6e5Q3c6qoQ4.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6e5Q3c6qoQ4._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6e5Q3c6qoQ4"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5tlfd0DnTm2.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5tlfd0DnTm2._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5tlfd0DnTm2"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.60E7SlAlyCO_5d6O4ZTbeue"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":30,"id":"01","url":"story_content/6DZGMys5AHR_72_DX770_DY770.swf","type":"normal","altText":"number-08.png","width":400,"height":400,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":48,"yPos":213,"tabIndex":7,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":192.5,"rotateYPos":192.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":385,"bottom":385,"altText":"number-08.png","pngfb":false,"pr":{"l":"Lib","i":19}},"html5data":{"xPos":0,"yPos":0,"width":385,"height":385,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":385,"bottom":385,"altText":"number-08.png","pngfb":false,"pr":{"l":"Lib","i":20}},"html5data":{"xPos":0,"yPos":0,"width":385,"height":385,"strokewidth":0}}}],"width":385,"height":385,"resume":true,"useHandCursor":true,"id":"6e5Q3c6qoQ4","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5Y5qYBKgbbj.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5Y5qYBKgbbj._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5Y5qYBKgbbj"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5tlfd0DnTm2.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5tlfd0DnTm2._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5tlfd0DnTm2"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.60E7SlAlyCO_5d6O4ZTbeue"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":26,"id":"01","url":"story_content/6LPoDT9ePED_72_DX770_DY770.swf","type":"normal","altText":"number-09.png","width":400,"height":400,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":452,"yPos":213,"tabIndex":8,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":192.5,"rotateYPos":192.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":385,"bottom":385,"altText":"number-09.png","pngfb":false,"pr":{"l":"Lib","i":19}},"html5data":{"xPos":0,"yPos":0,"width":385,"height":385,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":385,"bottom":385,"altText":"number-09.png","pngfb":false,"pr":{"l":"Lib","i":20}},"html5data":{"xPos":0,"yPos":0,"width":385,"height":385,"strokewidth":0}}}],"width":385,"height":385,"resume":true,"useHandCursor":true,"id":"5tlfd0DnTm2","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5Y5qYBKgbbj.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5Y5qYBKgbbj._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5Y5qYBKgbbj"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6e5Q3c6qoQ4.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6e5Q3c6qoQ4._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6e5Q3c6qoQ4"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.60E7SlAlyCO_5d6O4ZTbeue"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6pqGcL99a2Z_CorrectReview","id":"01","linkId":"6pqGcL99a2Z_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":692,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":12}}}],"shapemaskId":"","xPos":0,"yPos":772,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":650,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1300,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":1,"yPos":1,"width":1297,"height":37,"strokewidth":2}},"width":1300,"height":40,"resume":false,"useHandCursor":true,"id":"6pqGcL99a2Z_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6pqGcL99a2Z_IncorrectReview","id":"01","linkId":"6pqGcL99a2Z_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":701,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":14}}}],"shapemaskId":"","xPos":0,"yPos":772,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":650,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1300,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":13}},"html5data":{"xPos":1,"yPos":1,"width":1297,"height":37,"strokewidth":2}},"width":1300,"height":40,"resume":false,"useHandCursor":true,"id":"6pqGcL99a2Z_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');