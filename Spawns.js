function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(1700, random(80, 120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -7;
    
     //assign lifetime to the variable
    cloud.lifetime = 300;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth += 1;

    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
}

/*function meat() {
  if (frameCount % 10 === 0) {
    var meat = createSprite(1700, random(80, 120));
    meat.addImage(meatImage);
    meat.velocityX = -7;
    meat.scale = 0.5;
    meatGroup.add(meat);
  }
  fill(0);
  if (meatGroup.isTouching(trex)) {
    meatGroup.destroyEach();
    var message = createSprite(width/2, 450);//text("NOW, FOR ONCE CACTUS OR AERODACTLES CAN DO NOTHING OF YOU", width/2, 450);
    message.addImage(mess);
    mess.visible = false;
  }
}*/

function spawnObstacles() {
  if(frameCount % 77 === 0) {
    if (score < 400) {
      var obstacle = createSprite(1700, 165);
      //generate random obstacles
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
          break;
        case 2: obstacle.addImage(obstacle2);
          break;
        case 3: obstacle.addImage(obstacle3);
          break;
        case 4: obstacle.addImage(obstacle4);
          break;
        case 5: obstacle.addImage(obstacle5);
          break;
        case 6: obstacle.addImage(obstacle6);
          break;
        default: break;
      }
        
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.5;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
      obstaclesGroup.setVelocityXEach(-(4 + 10 * score / 200));
      obstaclesGroup.setLifetimeEach(300);  
    } else if (score >= 400) {
      var cacbirds = random(1, 4);
      if (cacbirds <= 2) {
        var obstacle = createSprite(1700, 165);
        //generate random obstacles
        var rand = Math.round(random(1,6));
        switch(rand) {
          case 1: obstacle.addImage(obstacle1);
            break;
          case 2: obstacle.addImage(obstacle2);
            break;
          case 3: obstacle.addImage(obstacle3);
            break;
          case 4: obstacle.addImage(obstacle4);
            break;
          case 5: obstacle.addImage(obstacle5);
            break;
          case 6: obstacle.addImage(obstacle6);
            break;
          default: break;
        }
        console.log(trex.y);
        //assign scale and lifetime to the obstacle           
        obstacle.scale = 0.5;
        //add each obstacle to the group
        obstaclesGroup.add(obstacle);
        obstaclesGroup.setVelocityXEach(-(4 + 10 * score / 200));
        obstaclesGroup.setLifetimeEach(300);
      } else if (cacbirds > 2) {
        var birdy = Math.round(random(2));
        var bird = createSprite(1700, height/2);
        bird.addAnimation("fly", birdImage);
        bird.setCollider("circle", 0, 0, 50);
        //generate random obstacles
        switch(birdy) {
          case 0: bird.y = 155;
            break;
          case 1: bird.y = 113;
            break;
          case 2: bird.y = 75;
          default: break;
        }
        bird.depth = trex.depth;
        bird.depth += 1;
        //assign scale and lifetime to the obstacle           
        bird.scale = 0.4;
        if (gamestate === END) {
          bird.addImage(bird1);
        }
        //add each obstacle to the group
        obstaclesGroup.add(bird);
        obstaclesGroup.setVelocityXEach(-(4 + 10 * score / 200));
        obstaclesGroup.setLifetimeEach(300);  
      }
    }
  }
}

function reset() {
  gamestate = PLAY;
  over.visible = false;
  restart.visible = false;
  trex.changeAnimation("running" , trex_running);
  score = 0;
  trex.y = 180;

  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
}