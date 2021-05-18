import { PokinoScene } from '../render/PokinoScene';

describe('PokinoScene', () => {

  let test_PokinoScene = new PokinoScene();


  it('should have a camera', () => {
    expect(test_PokinoScene.m_camera).toBeDefined();
  });

});
