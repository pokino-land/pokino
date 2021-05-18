import { player } from '../render/player';

describe('player', () => {

  const width = 10;
  const height = 10;
  let test_player = new player(width, height);


  it('should have width', () => {
    expect(test_player.m_sceneWidth).toBe(width);
  });

  it('should have height', () => {
    expect(test_player.m_sceneHeight).toBe(height);
  });

  it('should have a ball', () => {
    expect(test_player.m_ball).toBeDefined();
  });

  it('should have a mesh', () => {
    expect(test_player.m_mesh).toBeDefined();
  });

});
