import { JsonPokemonObject } from 'src/app/api/json-pokemon-object';
import {enemy } from '../render/enemy';

describe('enemy', () => {
    const height = 10;
    let test_enemy = new enemy(new JsonPokemonObject(), height);


    it('should have a enemy body', () => {
      expect(test_enemy.m_enemyBody).toBeDefined();
    });
  
    it('should have a mesh', () => {
        expect(test_enemy.m_mesh).toBeDefined();
      });

  });