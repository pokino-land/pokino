import { PokinoScene } from '../render/PokinoScene';

describe('PokinoScene', () => {

  let test_PokinoScene = new PokinoScene();


  it('should have a camera', () => {
    test_PokinoScene.init(1,1);
    expect(test_PokinoScene.m_camera).toBeDefined();
  });

});
