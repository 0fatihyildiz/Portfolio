import type { AnimationOptionsWithOverrides, MotionKeyframesDefinition } from '@productdevbook/motion'
import { spring } from '@productdevbook/motion'

const initialKeyframes: MotionKeyframesDefinition = {
  opacity: 0,
  y: 100,
}

const animateKeyframes: MotionKeyframesDefinition = {
  opacity: 1,
  y: 0,
}

function transition(delay: number): AnimationOptionsWithOverrides {
  return {
    duration: 0.3,
    easing: spring({ velocity: 100 }),
    delay,
  }
}

export { animateKeyframes, initialKeyframes, transition }
