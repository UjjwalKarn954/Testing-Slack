"use strict";
// https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html
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
exports.ServerlessapplicationrepositoryCloudformationStack = void 0;
var cdktf = require("cdktf");
function serverlessapplicationrepositoryCloudformationStackTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html aws_serverlessapplicationrepository_cloudformation_stack}
*/
var ServerlessapplicationrepositoryCloudformationStack = /** @class */ (function (_super) {
    __extends(ServerlessapplicationrepositoryCloudformationStack, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html aws_serverlessapplicationrepository_cloudformation_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServerlessapplicationrepositoryCloudformationStackConfig
    */
    function ServerlessapplicationrepositoryCloudformationStack(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_serverlessapplicationrepository_cloudformation_stack',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applicationId = config.applicationId;
        _this._capabilities = config.capabilities;
        _this._name = config.name;
        _this._parameters = config.parameters;
        _this._semanticVersion = config.semanticVersion;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "applicationId", {
        get: function () {
            return this.getStringAttribute('application_id');
        },
        set: function (value) {
            this._applicationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "applicationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applicationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "capabilities", {
        get: function () {
            return this.getListAttribute('capabilities');
        },
        set: function (value) {
            this._capabilities = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "capabilitiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capabilities;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // outputs - computed: true, optional: false, required: false
    ServerlessapplicationrepositoryCloudformationStack.prototype.outputs = function (key) {
        return new cdktf.StringMap(this, 'outputs').lookup(key);
    };
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "parameters", {
        get: function () {
            return this.interpolationForAttribute('parameters'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._parameters = value;
        },
        enumerable: false,
        configurable: true
    });
    ServerlessapplicationrepositoryCloudformationStack.prototype.resetParameters = function () {
        this._parameters = undefined;
    };
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "semanticVersion", {
        get: function () {
            return this.getStringAttribute('semantic_version');
        },
        set: function (value) {
            this._semanticVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ServerlessapplicationrepositoryCloudformationStack.prototype.resetSemanticVersion = function () {
        this._semanticVersion = undefined;
    };
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "semanticVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._semanticVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ServerlessapplicationrepositoryCloudformationStack.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ServerlessapplicationrepositoryCloudformationStack.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    ServerlessapplicationrepositoryCloudformationStack.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(ServerlessapplicationrepositoryCloudformationStack.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ServerlessapplicationrepositoryCloudformationStack.prototype.synthesizeAttributes = function () {
        return {
            application_id: cdktf.stringToTerraform(this._applicationId),
            capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._capabilities),
            name: cdktf.stringToTerraform(this._name),
            parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
            semantic_version: cdktf.stringToTerraform(this._semanticVersion),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: serverlessapplicationrepositoryCloudformationStackTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServerlessapplicationrepositoryCloudformationStack.tfResourceType = "aws_serverlessapplicationrepository_cloudformation_stack";
    return ServerlessapplicationrepositoryCloudformationStack;
}(cdktf.TerraformResource));
exports.ServerlessapplicationrepositoryCloudformationStack = ServerlessapplicationrepositoryCloudformationStack;
