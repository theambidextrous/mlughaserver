window.globalProvideData('slide', '{"title":"Pick One","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":8,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide8","width":1300,"height":812,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"60E7SlAlyCO","actionGroups":{"60E7SlAlyCO_5d6O4ZTbeue":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6emspTJn9O9.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5refsm6Xtu6.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"5VsBvDPo35o"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5VsBvDPo35o"}}]}]},"ReviewInt_6pqGcL99a2Z":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5refsm6Xtu6"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6emspTJn9O9"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"64uuSPggy8t.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6pqGcL99a2Z_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6pqGcL99a2Z_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6pqGcL99a2Z","typea":"var","valueb":"5dfm3L3Xzzk","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5dfm3L3Xzzk.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6pqGcL99a2Z"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5dfm3L3Xzzk.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6pqGcL99a2Z"}]}]}]},"ReviewIntCorrectIncorrect_6pqGcL99a2Z":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5refsm6Xtu6"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6emspTJn9O9"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6pqGcL99a2Z":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6pqGcL99a2Z"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6pqGcL99a2Z":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5refsm6Xtu6"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6emspTJn9O9"},"enabled":{"type":"boolean","value":false}}]},"6pqGcL99a2Z_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"64uuSPggy8t.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5dfm3L3Xzzk.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6pqGcL99a2Z"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"64uuSPggy8t.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"64uuSPggy8t.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6pqGcL99a2Z"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_60E7SlAlyCO":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6CdLPyevDxV"}}]},"NavigationRestrictionPreviousSlide_60E7SlAlyCO":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5dfm3L3Xzzk.$QuizComplete","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.5dfm3L3Xzzk_timer"},{"kind":"showtimer","id":"_player.5dfm3L3Xzzk_timer"}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6mo3gJ6g4S5","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6mo3gJ6g4S5","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6pqGcL99a2Z","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6pqGcL99a2Z"}],"elseActions":[{"kind":"exe_actiongroup","id":"6pqGcL99a2Z_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6pqGcL99a2Z","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6pqGcL99a2Z","typea":"var","valueb":"5dfm3L3Xzzk","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5dfm3L3Xzzk"},"completed_slide_ref":{"type":"string","value":"_player.5cskvBHmA3j.6fwoxKTrSa9"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6pqGcL99a2Z","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6pqGcL99a2Z","typea":"var","valueb":"5dfm3L3Xzzk","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5dfm3L3Xzzk"},"completed_slide_ref":{"type":"string","value":"_player.5cskvBHmA3j.6fwoxKTrSa9"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_60E7SlAlyCO"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_60E7SlAlyCO"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":44,"id":"5t6F7HKg473"},{"kind":"audio","assetId":45,"id":"5VsBvDPo35o"},{"kind":"audio","assetId":46,"id":"5nx5abOmvMm"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":791479,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KNwprZg5QV"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5vfCoCxy5mF"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5brkDAZpkIq"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69L8grGtdNH"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6RoFkizLEzx"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6emspTJn9O9"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5refsm6Xtu6"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"5t6F7HKg473"}},{"kind":"media_play","objRef":{"type":"string","value":"5t6F7HKg473"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5t6F7HKg473"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5vr9NFLhyJy"}}]},{"kind":"ontimelinetick","time":2021,"actions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"5nx5abOmvMm"}},{"kind":"media_play","objRef":{"type":"string","value":"5nx5abOmvMm"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5nx5abOmvMm"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":0,"id":"01","url":"story_content/5xwaNGI8QS5_72_DX2480_DY2480.swf","type":"normal","altText":"bg-01.png","width":1240,"height":800,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":-9,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":650,"rotateYPos":415,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1300,"bottom":830,"altText":"bg-01.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1300,"height":830,"strokewidth":0}},"width":1300,"height":830,"resume":true,"useHandCursor":true,"id":"6KNwprZg5QV"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":66,"yPos":37,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":581.5,"rotateYPos":343,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-5,"top":-5,"right":1168,"bottom":691,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":0,"yPos":0,"width":1163,"height":686,"strokewidth":8}},"width":1163,"height":686,"resume":true,"useHandCursor":true,"id":"5vfCoCxy5mF"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5brkDAZpkIq_-2141053925","id":"01","linkId":"txt__default_5brkDAZpkIq","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":647,"bottom":112,"pngfb":false,"pr":{"l":"Lib","i":48}}}],"shapemaskId":"","xPos":295,"yPos":20,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":363,"rotateYPos":54.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-6,"top":-6,"right":733,"bottom":116,"altText":"Identify eight girls","pngfb":false,"pr":{"l":"Lib","i":16}},"html5data":{"xPos":0,"yPos":0,"width":727,"height":110,"strokewidth":10}},"width":727,"height":110,"resume":true,"useHandCursor":true,"id":"5brkDAZpkIq"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":3,"id":"01","url":"story_content/6nVvM05npOJ_72_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1179,"yPos":706,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"69L8grGtdNH","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5cskvBHmA3j.6CdLPyevDxV"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":4,"id":"01","url":"story_content/6nVvM05npOJ_X_72_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":46,"yPos":706,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":9}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"6RoFkizLEzx","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":42,"id":"01","url":"story_content/6qVtbop40jX_72_DX784_DY784.swf","type":"normal","altText":"6girls.png","width":244,"height":392,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":787,"yPos":210,"tabIndex":6,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":122,"rotateYPos":196,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":244,"bottom":392,"altText":"6girls.png","pngfb":false,"pr":{"l":"Lib","i":49}},"html5data":{"xPos":0,"yPos":0,"width":244,"height":392,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":244,"bottom":392,"altText":"6girls.png","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":0,"yPos":0,"width":244,"height":392,"strokewidth":0}}}],"width":244,"height":392,"resume":true,"useHandCursor":true,"id":"6emspTJn9O9","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5refsm6Xtu6.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5refsm6Xtu6._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5refsm6Xtu6"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.60E7SlAlyCO_5d6O4ZTbeue"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":43,"id":"01","url":"story_content/5b73vOP5Vn3_72_DX792_DY792.swf","type":"normal","altText":"8girls.png","width":313,"height":396,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":214,"yPos":208,"tabIndex":5,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":156.5,"rotateYPos":198,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":313,"bottom":396,"altText":"8girls.png","pngfb":false,"pr":{"l":"Lib","i":51}},"html5data":{"xPos":0,"yPos":0,"width":313,"height":396,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":313,"bottom":396,"altText":"8girls.png","pngfb":false,"pr":{"l":"Lib","i":52}},"html5data":{"xPos":0,"yPos":0,"width":313,"height":396,"strokewidth":0}}}],"width":313,"height":396,"resume":true,"useHandCursor":true,"id":"5refsm6Xtu6","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6emspTJn9O9.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6emspTJn9O9._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6emspTJn9O9"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.60E7SlAlyCO_5d6O4ZTbeue"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":650,"yPos":130,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":-0.5,"rotateYPos":295,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":2,"bottom":593,"altText":"Line 1","pngfb":false,"pr":{"l":"Lib","i":10}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":591,"strokewidth":1}},"width":0,"height":591,"resume":true,"useHandCursor":true,"id":"5vr9NFLhyJy"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6pqGcL99a2Z_CorrectReview","id":"01","linkId":"6pqGcL99a2Z_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":692,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":12}}}],"shapemaskId":"","xPos":0,"yPos":772,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":650,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1300,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":1,"yPos":1,"width":1297,"height":37,"strokewidth":2}},"width":1300,"height":40,"resume":false,"useHandCursor":true,"id":"6pqGcL99a2Z_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6pqGcL99a2Z_IncorrectReview","id":"01","linkId":"6pqGcL99a2Z_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":701,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":14}}}],"shapemaskId":"","xPos":0,"yPos":772,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":650,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1300,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":13}},"html5data":{"xPos":1,"yPos":1,"width":1297,"height":37,"strokewidth":2}},"width":1300,"height":40,"resume":false,"useHandCursor":true,"id":"6pqGcL99a2Z_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');