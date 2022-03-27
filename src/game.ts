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

const videoStream3 = new Entity('videoStream3')
engine.addEntity(videoStream3)
videoStream3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(5.5, 2, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
videoStream3.addComponentOrReplace(transform8)

const videoStream4 = new Entity('videoStream4')
engine.addEntity(videoStream4)
videoStream4.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(12, 2, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
videoStream4.addComponentOrReplace(transform9)

const videoStream5 = new Entity('videoStream5')
engine.addEntity(videoStream5)
videoStream5.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(12, 2, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
videoStream5.addComponentOrReplace(transform10)

const videoStream8 = new Entity('videoStream8')
engine.addEntity(videoStream8)
videoStream8.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(15.5, 2, 11),
  rotation: new Quaternion(4.731725943138074e-15, -0.70710688829422, 8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(1.0000061988830566, 1, 1.0000061988830566)
})
videoStream8.addComponentOrReplace(transform11)

const videoStream10 = new Entity('videoStream10')
engine.addEntity(videoStream10)
videoStream10.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(4, 1.5, 0.5),
  rotation: new Quaternion(-3.768626188703885e-15, -1, 1.1920928955078125e-7, -1.1920927533992653e-7),
  scale: new Vector3(1.0000057220458984, 1, 1.0000057220458984)
})
videoStream10.addComponentOrReplace(transform12)

const videoStream11 = new Entity('videoStream11')
engine.addEntity(videoStream11)
videoStream11.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(0.5, 2, 2),
  rotation: new Quaternion(-1.9455749640203465e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000057220458984, 1, 1.0000057220458984)
})
videoStream11.addComponentOrReplace(transform13)

const videoStream12 = new Entity('videoStream12')
engine.addEntity(videoStream12)
videoStream12.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(0.5, 6, 6),
  rotation: new Quaternion(4.731725943138074e-15, -0.70710688829422, 8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(1.0000073909759521, 1, 1.0000073909759521)
})
videoStream12.addComponentOrReplace(transform14)

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(0.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ambientSound.addComponentOrReplace(transform15)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
script1.init(options)
script2.init(options)
script1.spawn(videoStream2, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream2","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream2","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream2","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream2, channelBus))
script1.spawn(videoStream3, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream3","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream3","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream3","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream3, channelBus))
script1.spawn(videoStream4, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream4","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream4","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream4","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream4, channelBus))
script1.spawn(videoStream5, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream5","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream5","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream5","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream5, channelBus))
script1.spawn(videoStream8, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream8","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream8","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream8","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream8, channelBus))
script1.spawn(videoStream10, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream10","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream10","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream10","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream10, channelBus))
script1.spawn(videoStream11, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream11","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream11","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream11","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream11, channelBus))
script1.spawn(videoStream12, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream12","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream12","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream12","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream12, channelBus))
script2.spawn(ambientSound, {"sound":"Birds","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))