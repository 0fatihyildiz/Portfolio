import { spring } from '@productdevbook/motion'
import type { AnimationOptionsWithOverrides, MotionKeyframesDefinition } from '@productdevbook/motion'

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

export { initialKeyframes, animateKeyframes, transition }
