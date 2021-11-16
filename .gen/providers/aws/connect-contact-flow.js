"use strict";
// https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html
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
exports.ConnectContactFlow = void 0;
var cdktf = require("cdktf");
function connectContactFlowTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html aws_connect_contact_flow}
*/
var ConnectContactFlow = /** @class */ (function (_super) {
    __extends(ConnectContactFlow, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html aws_connect_contact_flow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectContactFlowConfig
    */
    function ConnectContactFlow(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_connect_contact_flow',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._content = config.content;
        _this._contentHash = config.contentHash;
        _this._description = config.description;
        _this._filename = config.filename;
        _this._instanceId = config.instanceId;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._type = config.type;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(ConnectContactFlow.prototype, "arn", {
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
    Object.defineProperty(ConnectContactFlow.prototype, "contactFlowId", {
        // contact_flow_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('contact_flow_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectContactFlow.prototype, "content", {
        get: function () {
            return this.getStringAttribute('content');
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectContactFlow.prototype.resetContent = function () {
        this._content = undefined;
    };
    Object.defineProperty(ConnectContactFlow.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectContactFlow.prototype, "contentHash", {
        get: function () {
            return this.getStringAttribute('content_hash');
        },
        set: function (value) {
            this._contentHash = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectContactFlow.prototype.resetContentHash = function () {
        this._contentHash = undefined;
    };
    Object.defineProperty(ConnectContactFlow.prototype, "contentHashInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentHash;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectContactFlow.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectContactFlow.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ConnectContactFlow.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectContactFlow.prototype, "filename", {
        get: function () {
            return this.getStringAttribute('filename');
        },
        set: function (value) {
            this._filename = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectContactFlow.prototype.resetFilename = function () {
        this._filename = undefined;
    };
    Object.defineProperty(ConnectContactFlow.prototype, "filenameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filename;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectContactFlow.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectContactFlow.prototype, "instanceId", {
        get: function () {
            return this.getStringAttribute('instance_id');
        },
        set: function (value) {
            this._instanceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectContactFlow.prototype, "instanceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectContactFlow.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectContactFlow.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectContactFlow.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectContactFlow.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ConnectContactFlow.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectContactFlow.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectContactFlow.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ConnectContactFlow.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectContactFlow.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectContactFlow.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(ConnectContactFlow.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConnectContactFlow.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    ConnectContactFlow.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(ConnectContactFlow.prototype, "timeoutsInput", {
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
    ConnectContactFlow.prototype.synthesizeAttributes = function () {
        return {
            content: cdktf.stringToTerraform(this._content),
            content_hash: cdktf.stringToTerraform(this._contentHash),
            description: cdktf.stringToTerraform(this._description),
            filename: cdktf.stringToTerraform(this._filename),
            instance_id: cdktf.stringToTerraform(this._instanceId),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
            timeouts: connectContactFlowTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ConnectContactFlow.tfResourceType = "aws_connect_contact_flow";
    return ConnectContactFlow;
}(cdktf.TerraformResource));
exports.ConnectContactFlow = ConnectContactFlow;
