import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import dts from "rollup-plugin-dts";
import {terser} from 'rollup-plugin-terser'
const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    external: [,'react','react-dom',],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        plugins: ["@emotion"],
        presets: ["@babel/preset-react"],
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("development"),
      }),
      terser()
    ],
  },

  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

export default config;
