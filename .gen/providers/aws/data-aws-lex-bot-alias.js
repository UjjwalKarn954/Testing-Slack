"use strict";
// https://www.terraform.io/docs/providers/aws/d/lex_bot_alias.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DataAwsLexBotAlias = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lex_bot_alias.html aws_lex_bot_alias}
*/
var DataAwsLexBotAlias = /** @class */ (function (_super) {
    __extends(DataAwsLexBotAlias, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lex_bot_alias.html aws_lex_bot_alias} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLexBotAliasConfig
    */
    function DataAwsLexBotAlias(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lex_bot_alias',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._botName = config.botName;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(DataAwsLexBotAlias.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBotAlias.prototype, "botName", {
        get: function () {
            return this.getStringAttribute('bot_name');
        },
        set: function (value) {
            this._botName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBotAlias.prototype, "botNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._botName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBotAlias.prototype, "botVersion", {
        // bot_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bot_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBotAlias.prototype, "checksum", {
        // checksum - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('checksum');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBotAlias.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBotAlias.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBotAlias.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBotAlias.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBotAlias.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsLexBotAlias.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsLexBotAlias.prototype.synthesizeAttributes = function () {
        return {
            bot_name: cdktf.stringToTerraform(this._botName),
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsLexBotAlias.tfResourceType = "aws_lex_bot_alias";
    return DataAwsLexBotAlias;
}(cdktf.TerraformDataSource));
exports.DataAwsLexBotAlias = DataAwsLexBotAlias;
