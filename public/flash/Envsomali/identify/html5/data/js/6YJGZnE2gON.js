window.globalProvideData('slide', '{"title":"Hand Leg","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":2,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide2","width":1240,"height":800,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6YJGZnE2gON","actionGroups":{"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[]},"ActGrpOnAllTimelinesComplete":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"6YJGZnE2gON_6Z7QQPCBkbB":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5uIkuGhKHy6.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6fsnH9uawnP.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"5m9ahmBOp5a"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5m9ahmBOp5a"}}]}]},"ReviewInt_6JhodEP9r9y":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6fsnH9uawnP"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5uIkuGhKHy6"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6mvwnZt3Shi.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6JhodEP9r9y_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6JhodEP9r9y_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6JhodEP9r9y","typea":"var","valueb":"6m9S7ztOjPm","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000011"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6m9S7ztOjPm.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6JhodEP9r9y"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6m9S7ztOjPm.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6JhodEP9r9y"}]}]}]},"ReviewIntCorrectIncorrect_6JhodEP9r9y":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6fsnH9uawnP"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5uIkuGhKHy6"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6JhodEP9r9y":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6JhodEP9r9y"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000011"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000011"}]}]},"DisableChoices_6JhodEP9r9y":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6fsnH9uawnP"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5uIkuGhKHy6"},"enabled":{"type":"boolean","value":false}}]},"6JhodEP9r9y_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6mvwnZt3Shi.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6m9S7ztOjPm.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6JhodEP9r9y"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6mvwnZt3Shi.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6mvwnZt3Shi.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6JhodEP9r9y"}]}]}]}]},"SetLayout_pxabnsnfns00000000011":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000011"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000011"}]}]},"NavigationRestrictionNextSlide_6YJGZnE2gON":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6orS2eCAFKq"}}]},"NavigationRestrictionPreviousSlide_6YJGZnE2gON":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6m9S7ztOjPm.$QuizComplete","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6m9S7ztOjPm_timer"},{"kind":"showtimer","id":"_player.6m9S7ztOjPm_timer"}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000011"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000011"}]}]},{"kind":"onallopentimelinescomplete","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnAllTimelinesComplete"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5vJBCxc14fS","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5vJBCxc14fS","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6JhodEP9r9y","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6JhodEP9r9y"}],"elseActions":[{"kind":"exe_actiongroup","id":"6JhodEP9r9y_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6JhodEP9r9y","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6JhodEP9r9y","typea":"var","valueb":"6m9S7ztOjPm","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6m9S7ztOjPm"},"completed_slide_ref":{"type":"string","value":"_player.6WPHsHYFR6z.6XJvPXANCYm"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6JhodEP9r9y","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6JhodEP9r9y","typea":"var","valueb":"6m9S7ztOjPm","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6m9S7ztOjPm"},"completed_slide_ref":{"type":"string","value":"_player.6WPHsHYFR6z.6XJvPXANCYm"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6YJGZnE2gON"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6YJGZnE2gON"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":13,"id":"6inqrRYaVV0"},{"kind":"audio","assetId":14,"id":"5m9ahmBOp5a"},{"kind":"audio","assetId":15,"id":"67Oop3KcGe2"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":791479,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6NScxRULcY0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WWOgbyXokA"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6anUUhwB9rQ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"62XBPDXZz9k"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6CtyB1Ykj1u"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6inqrRYaVV0"}},{"kind":"media_play","objRef":{"type":"string","value":"6inqrRYaVV0"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6inqrRYaVV0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5uIkuGhKHy6"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6fsnH9uawnP"}}]},{"kind":"ontimelinetick","time":5250,"actions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"67Oop3KcGe2"}},{"kind":"media_play","objRef":{"type":"string","value":"67Oop3KcGe2"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"67Oop3KcGe2"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":0,"id":"01","url":"story_content/5m7Z67LKA4e_80_DX2662_DY2662.swf","type":"normal","altText":"sunrise hd articulate.png","width":2047,"height":1563,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-81,"yPos":-16,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":665.5,"rotateYPos":508,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1331,"bottom":1016,"altText":"sunrise hd articulate.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1331,"height":1016,"strokewidth":0}},"width":1331,"height":1016,"resume":true,"useHandCursor":true,"id":"6NScxRULcY0"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":44,"yPos":8,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":580,"rotateYPos":392,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-5,"top":-5,"right":1164,"bottom":788,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":1}},"html5data":{"xPos":0,"yPos":0,"width":1160,"height":784,"strokewidth":8}},"width":1160,"height":784,"resume":true,"useHandCursor":true,"id":"6WWOgbyXokA"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":5,"id":"01","url":"story_content/6nVvM05npOJ_80_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1136,"yPos":698,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"6anUUhwB9rQ","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6WPHsHYFR6z.6orS2eCAFKq"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":6,"id":"01","url":"story_content/6nVvM05npOJ_X_80_DX176_DY176.swf","type":"normal","altText":"next.png","width":176,"height":176,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":12,"yPos":698,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":88,"altText":"next.png","pngfb":false,"pr":{"l":"Lib","i":9}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":88,"strokewidth":0}},"width":88,"height":88,"resume":true,"useHandCursor":true,"id":"62XBPDXZz9k","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6CtyB1Ykj1u_-140147523","id":"01","linkId":"txt__default_6CtyB1Ykj1u","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":532,"bottom":100,"pngfb":false,"pr":{"l":"Lib","i":14}}}],"shapemaskId":"","xPos":308,"yPos":24,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":301.5,"rotateYPos":52.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":608,"bottom":110,"altText":"Identify the eyes?","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":0,"yPos":0,"width":604,"height":106,"strokewidth":8}},"width":604,"height":106,"resume":true,"useHandCursor":true,"id":"6CtyB1Ykj1u"},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":10,"id":"01","url":"story_content/6VMaT6DZbSG_80_DX1018_DY1018.swf","type":"normal","altText":"eyes.png","width":558,"height":214,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":11,"id":"02","url":"story_content/6VMaT6DZbSG_80_B30_C40_DX1018_DY1018.swf","type":"normal","altText":"eyes.png","width":558,"height":214,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":106,"yPos":324,"tabIndex":5,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":254.5,"rotateYPos":97.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":509,"bottom":195,"altText":"eyes.png","pngfb":false,"pr":{"l":"Lib","i":15}},"html5data":{"xPos":0,"yPos":0,"width":509,"height":195,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":509,"bottom":195,"altText":"eyes.png","pngfb":false,"pr":{"l":"Lib","i":16}},"html5data":{"xPos":0,"yPos":0,"width":509,"height":195,"strokewidth":0}}}],"width":509,"height":195,"resume":true,"useHandCursor":true,"id":"5uIkuGhKHy6","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6fsnH9uawnP.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6fsnH9uawnP._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6fsnH9uawnP"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.6YJGZnE2gON_6Z7QQPCBkbB"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":12,"id":"01","url":"story_content/6oQulJPXSYu_FFFFFF_80_DX770_DY770.swf","type":"normal","altText":"Image 2.emf","width":492,"height":316,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":752,"yPos":322,"tabIndex":4,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":192.5,"rotateYPos":123.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":385,"bottom":247,"altText":"Image 2.emf","pngfb":false,"pr":{"l":"Lib","i":17}},"html5data":{"xPos":0,"yPos":0,"width":385,"height":247,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":0,"top":0,"right":385,"bottom":247,"altText":"Image 2.emf","pngfb":false,"pr":{"l":"Lib","i":18}},"html5data":{"xPos":0,"yPos":0,"width":385,"height":247,"strokewidth":0}}}],"width":385,"height":247,"resume":true,"useHandCursor":true,"id":"6fsnH9uawnP","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5uIkuGhKHy6.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5uIkuGhKHy6._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5uIkuGhKHy6"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onvarchanged","varname":"_checked","priority":0,"actions":[{"kind":"exe_actiongroup","id":"_parent.6YJGZnE2gON_6Z7QQPCBkbB"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6JhodEP9r9y_CorrectReview","id":"01","linkId":"6JhodEP9r9y_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":660,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":11}}}],"shapemaskId":"","xPos":0,"yPos":760,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":620,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1240,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":10}},"html5data":{"xPos":1,"yPos":1,"width":1237,"height":37,"strokewidth":2}},"width":1240,"height":40,"resume":false,"useHandCursor":true,"id":"6JhodEP9r9y_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6JhodEP9r9y_IncorrectReview","id":"01","linkId":"6JhodEP9r9y_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":669,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":13}}}],"shapemaskId":"","xPos":0,"yPos":760,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":620,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1240,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":12}},"html5data":{"xPos":1,"yPos":1,"width":1237,"height":37,"strokewidth":2}},"width":1240,"height":40,"resume":false,"useHandCursor":true,"id":"6JhodEP9r9y_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');