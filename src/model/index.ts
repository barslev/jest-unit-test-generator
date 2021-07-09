
export interface ParsedClass {
  name: string;
  dependencies: ParsedClassDependency[];
  methods: any;
}

export interface ParsedClassDependency {
  name: string;
  type?: string;
  token?: string;
}
export interface ParsedImport {
  path: string;
  names: string[];
}

export interface ParsedSourceFile {
  imports: ParsedImport[];
  classes: ParsedClass[];
}

export interface ClassOptions {
  declarations: { name: string, type: string }[];
  initializers: { name?: string, value: string }[];
  dependencies: { name: string, token: string }[];
  imports: ParsedImport[];
  methods: string[];
}

export interface TemplateOptions {
  instanceVariableName: string;
  templateType: string;
  templatePath: string;
}

export interface DependencyHandlerOptions {
  variableName: string;
  injectionToken?: string;
  sourceCode: string;
  allImports: ParsedImport[];
  quoteSymbol: string;
  methods: string[];
}
export interface DependencyHandler {
  run(result: ClassOptions, dep: ParsedClassDependency, options: DependencyHandlerOptions): void

  test(dep: ParsedClassDependency): boolean;
}
