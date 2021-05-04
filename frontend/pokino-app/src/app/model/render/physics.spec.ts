import {physics } from '../render/physics';

describe('physics', () => {
    const width = 10;
    const height = 10;
    let test_physics = new physics(width, height);


    it('should have width', () => {
        expect(test_physics.m_sceneWidth).toBe(width);
      });
  
      it('should have height', () => {
        expect(test_physics.m_sceneHeight).toBe(height);
      });
      

    it('should have a enemy body', () => {
      expect(test_physics.enemy).toBeDefined();
    });
  
    it('should have a mesh', () => {
        expect(test_physics.ball).toBeDefined();
      });

  });