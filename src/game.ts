import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script2 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const woodenTabernacleRoundTable = new Entity('woodenTabernacleRoundTable')
engine.addEntity(woodenTabernacleRoundTable)
woodenTabernacleRoundTable.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(3.5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodenTabernacleRoundTable.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("a4dddfe5-698d-41c4-bbb2-fcceabe88d7d/Table_01/Table_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
woodenTabernacleRoundTable.addComponentOrReplace(gltfShape)

const woodenThrone = new Entity('woodenThrone')
engine.addEntity(woodenThrone)
woodenThrone.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(5.5, 0, 3),
  rotation: new Quaternion(-3.2851078069173712e-15, -0.8819212913513184, 1.0513320347627086e-7, 0.4713967442512512),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
woodenThrone.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("23540a6e-eb8c-4866-9bf6-563b75dc83a8/WoodBigChair_01/WoodBigChair_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
woodenThrone.addComponentOrReplace(gltfShape2)

const woodenThrone2 = new Entity('woodenThrone2')
engine.addEntity(woodenThrone2)
woodenThrone2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(12, 0, 13),
  rotation: new Quaternion(4.124684534895229e-15, -0.8819212913513184, 1.0513320347627086e-7, -0.4713967740535736),
  scale: new Vector3(1.0000022649765015, 1, 1.0000022649765015)
})
woodenThrone2.addComponentOrReplace(transform4)
woodenThrone2.addComponentOrReplace(gltfShape2)

const scriptorium = new Entity('scriptorium')
engine.addEntity(scriptorium)
scriptorium.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(0.5, 0, 13),
  rotation: new Quaternion(-1.3864135754287086e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
scriptorium.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("54d93298-8dc5-4cfc-8974-08e7ce262fa4/PapyrusDesk_01/PapyrusDesk_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
scriptorium.addComponentOrReplace(gltfShape3)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape4 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
entity.addComponentOrReplace(gltfShape4)
const transform6 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform6)

const videoStream2 = new Entity('videoStream2')
engine.addEntity(videoStream2)
videoStream2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(15.5, 2, 5.5),
  rotation: new Quaternion(-1.9455749640203465e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000054836273193, 1, 1.0000054836273193)
})
videoStream2.addComponentOrReplace(transform7)

const videoStream4 = new Entity('videoStream4')
engine.addEntity(videoStream4)
videoStream4.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(12, 2, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
videoStream4.addComponentOrReplace(transform8)

const videoStream5 = new Entity('videoStream5')
engine.addEntity(videoStream5)
videoStream5.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(12, 2, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
videoStream5.addComponentOrReplace(transform9)

const videoStream8 = new Entity('videoStream8')
engine.addEntity(videoStream8)
videoStream8.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(15.5, 2, 11),
  rotation: new Quaternion(4.731725943138074e-15, -0.70710688829422, 8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(1.0000061988830566, 1, 1.0000061988830566)
})
videoStream8.addComponentOrReplace(transform10)

const videoStream10 = new Entity('videoStream10')
engine.addEntity(videoStream10)
videoStream10.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(4, 2, 0.5),
  rotation: new Quaternion(-3.768626188703885e-15, -1, 1.1920928955078125e-7, -1.1920927533992653e-7),
  scale: new Vector3(1.0000057220458984, 1, 1.0000057220458984)
})
videoStream10.addComponentOrReplace(transform11)

const videoStream11 = new Entity('videoStream11')
engine.addEntity(videoStream11)
videoStream11.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(0.5, 2, 3.5),
  rotation: new Quaternion(-1.9455749640203465e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000066757202148, 1, 1.0000066757202148)
})
videoStream11.addComponentOrReplace(transform12)

const videoStream12 = new Entity('videoStream12')
engine.addEntity(videoStream12)
videoStream12.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(0.5, 6, 6),
  rotation: new Quaternion(4.731725943138074e-15, -0.70710688829422, 8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(1.0000073909759521, 1, 1.0000073909759521)
})
videoStream12.addComponentOrReplace(transform13)

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(0.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ambientSound.addComponentOrReplace(transform14)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(2, 2, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
videoStream.addComponentOrReplace(transform15)

const barbacue = new Entity('barbacue')
engine.addEntity(barbacue)
barbacue.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(14.5, 17.5, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barbacue.addComponentOrReplace(transform16)
const gltfShape5 = new GLTFShape("16888533-8bdd-4dc3-8694-738018f29133/Barbacue_01/Barbacue_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
barbacue.addComponentOrReplace(gltfShape5)

const industrialCouch = new Entity('industrialCouch')
engine.addEntity(industrialCouch)
industrialCouch.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(15, 13, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
industrialCouch.addComponentOrReplace(transform17)
const gltfShape6 = new GLTFShape("6ef496c2-4ccd-49ab-a12f-6c9c25b6f92c/Couch_02/Couch_02.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
industrialCouch.addComponentOrReplace(gltfShape6)

const soccerBall = new Entity('soccerBall')
engine.addEntity(soccerBall)
soccerBall.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(11.5, 5, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
soccerBall.addComponentOrReplace(transform18)
const gltfShape7 = new GLTFShape("44e7b413-1f33-43bc-bada-96659b75bd86/PlaygroundBall_01/PlaygroundBall_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
soccerBall.addComponentOrReplace(gltfShape7)

const surfboard = new Entity('surfboard')
engine.addEntity(surfboard)
surfboard.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(1, 5.5, 13),
  rotation: new Quaternion(0, 0, 0.0980171486735344, 0.9951847195625305),
  scale: new Vector3(0.9999999403953552, 0.9999999403953552, 1)
})
surfboard.addComponentOrReplace(transform19)
const gltfShape8 = new GLTFShape("87449055-9033-4ac4-8125-c78831f751d4/SurfBoard_01/SurfBoard_01.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
surfboard.addComponentOrReplace(gltfShape8)

const plantedFern = new Entity('plantedFern')
engine.addEntity(plantedFern)
plantedFern.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(4.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plantedFern.addComponentOrReplace(transform20)
const gltfShape9 = new GLTFShape("e9d4e87b-8d5f-4f03-a2e5-044effa9147f/PlantPot_03/PlantPot_03.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
plantedFern.addComponentOrReplace(gltfShape9)

const sunflower = new Entity('sunflower')
engine.addEntity(sunflower)
sunflower.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(6.5, 9.5, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sunflower.addComponentOrReplace(transform21)
const gltfShape10 = new GLTFShape("c5124c22-c518-45a6-8b9a-2f749e8de161/Flower_04/Flower_04.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
sunflower.addComponentOrReplace(gltfShape10)

const redBicycle = new Entity('redBicycle')
engine.addEntity(redBicycle)
redBicycle.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(2.5, 0, 15),
  rotation: new Quaternion(-5.84227022315531e-9, -0.9951847791671753, -0.09801702946424484, 5.931762814270769e-8),
  scale: new Vector3(1.000002145767212, 0.9999999403953552, 1.0000017881393433)
})
redBicycle.addComponentOrReplace(transform22)
const gltfShape11 = new GLTFShape("6ca825e8-3955-480f-867f-7a64af316e64/Bicycle_01/Bicycle_01.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
redBicycle.addComponentOrReplace(gltfShape11)

const surfboard3 = new Entity('surfboard3')
engine.addEntity(surfboard3)
surfboard3.setParent(_scene)
surfboard3.addComponentOrReplace(gltfShape8)
const transform23 = new Transform({
  position: new Vector3(1, 5.5, 12),
  rotation: new Quaternion(0, 0, 0.0980171486735344, 0.9951847195625305),
  scale: new Vector3(0.9999999403953552, 0.9999999403953552, 1)
})
surfboard3.addComponentOrReplace(transform23)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(videoStream2, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream2","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream2","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream2","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream2, channelBus))
script1.spawn(videoStream4, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream4","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream4","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream4","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream4, channelBus))
script1.spawn(videoStream5, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream5","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream5","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream5","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream5, channelBus))
script1.spawn(videoStream8, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream8","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream8","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream8","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream8, channelBus))
script1.spawn(videoStream10, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream10","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream10","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream10","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream10, channelBus))
script1.spawn(videoStream11, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream11","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream11","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream11","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream11, channelBus))
script1.spawn(videoStream12, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream12","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream12","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream12","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream12, channelBus))
script2.spawn(ambientSound, {"sound":"Birds","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
script1.spawn(videoStream, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream, channelBus))