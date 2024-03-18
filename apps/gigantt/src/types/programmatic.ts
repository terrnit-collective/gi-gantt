import type { ComponentInternalInstance } from 'vue'
import type InstanceRegistry from 'utils/instance-registry'

export interface GiganttProgrammatic {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: Record<string, any>;
}

export interface ProgrammaticInstance<T = ComponentInternalInstance> {
    instances: InstanceRegistry<T>;
    /** Promise resolve function */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolve?: (...args: any[]) => void;
    /** Promise reject function */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
    reject?: (...args: any[]) => void;
}

/**
 * Pollyfill for the InstanceType of programmatic components,
 * because the exposed data isn't included.
 */
export interface ProgrammaticExpose {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
    close(...args: any[]): void;
    promise: Promise<unknown>;
}

const validatableFormElementTypes =  [
  HTMLButtonElement,
  HTMLFieldSetElement,
  HTMLInputElement,
  HTMLObjectElement,
  HTMLOutputElement,
  HTMLSelectElement,
  HTMLTextAreaElement
]

export type ValidatableFormElement = InstanceType<
    (typeof validatableFormElementTypes)[number]
>