"use strict";
// https://www.terraform.io/docs/providers/aws/r/mq_configuration.html
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
exports.MqConfiguration = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html aws_mq_configuration}
*/
var MqConfiguration = /** @class */ (function (_super) {
    __extends(MqConfiguration, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html aws_mq_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MqConfigurationConfig
    */
    function MqConfiguration(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_mq_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._authenticationStrategy = config.authenticationStrategy;
        _this._data = config.data;
        _this._description = config.description;
        _this._engineType = config.engineType;
        _this._engineVersion = config.engineVersion;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(MqConfiguration.prototype, "arn", {
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
    Object.defineProperty(MqConfiguration.prototype, "authenticationStrategy", {
        get: function () {
            return this.getStringAttribute('authentication_strategy');
        },
        set: function (value) {
            this._authenticationStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    MqConfiguration.prototype.resetAuthenticationStrategy = function () {
        this._authenticationStrategy = undefined;
    };
    Object.defineProperty(MqConfiguration.prototype, "authenticationStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authenticationStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqConfiguration.prototype, "data", {
        get: function () {
            return this.getStringAttribute('data');
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqConfiguration.prototype, "dataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqConfiguration.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    MqConfiguration.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(MqConfiguration.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqConfiguration.prototype, "engineType", {
        get: function () {
            return this.getStringAttribute('engine_type');
        },
        set: function (value) {
            this._engineType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqConfiguration.prototype, "engineTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqConfiguration.prototype, "engineVersion", {
        get: function () {
            return this.getStringAttribute('engine_version');
        },
        set: function (value) {
            this._engineVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqConfiguration.prototype, "engineVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._engineVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqConfiguration.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqConfiguration.prototype, "latestRevision", {
        // latest_revision - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('latest_revision');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqConfiguration.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqConfiguration.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqConfiguration.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    MqConfiguration.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(MqConfiguration.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MqConfiguration.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    MqConfiguration.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(MqConfiguration.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MqConfiguration.prototype.synthesizeAttributes = function () {
        return {
            authentication_strategy: cdktf.stringToTerraform(this._authenticationStrategy),
            data: cdktf.stringToTerraform(this._data),
            description: cdktf.stringToTerraform(this._description),
            engine_type: cdktf.stringToTerraform(this._engineType),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    MqConfiguration.tfResourceType = "aws_mq_configuration";
    return MqConfiguration;
}(cdktf.TerraformResource));
exports.MqConfiguration = MqConfiguration;
