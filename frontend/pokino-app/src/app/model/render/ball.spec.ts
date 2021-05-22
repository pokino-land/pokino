import { ball } from '../render/ball';

describe('ball', () => {
  const radius = 5;
  const width = 10;
  const height = 10;
  let test_ball = new ball(radius, width, height);


  it('should have width', () => {
    expect(test_ball.m_sceneWidth).toBe(width);
  });

  it('should have height', () => {
    expect(test_ball.m_sceneHeight).toBe(height);
  });

  it('should have radius', () => {
    expect(test_ball.radius).toBe(radius);
  });

  it('should have a ball body', () => {
    expect(test_ball.m_ballBody).toBeDefined();
  });

  it('should have a mesh', () => {
    expect(test_ball.m_mesh).toBeDefined();
  });

});
