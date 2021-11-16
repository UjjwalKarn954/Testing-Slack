"use strict";
// https://www.terraform.io/docs/providers/aws/r/schemas_discoverer.html
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
exports.SchemasDiscoverer = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/schemas_discoverer.html aws_schemas_discoverer}
*/
var SchemasDiscoverer = /** @class */ (function (_super) {
    __extends(SchemasDiscoverer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/schemas_discoverer.html aws_schemas_discoverer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SchemasDiscovererConfig
    */
    function SchemasDiscoverer(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_schemas_discoverer',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._sourceArn = config.sourceArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(SchemasDiscoverer.prototype, "arn", {
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
    Object.defineProperty(SchemasDiscoverer.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SchemasDiscoverer.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SchemasDiscoverer.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchemasDiscoverer.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchemasDiscoverer.prototype, "sourceArn", {
        get: function () {
            return this.getStringAttribute('source_arn');
        },
        set: function (value) {
            this._sourceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchemasDiscoverer.prototype, "sourceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchemasDiscoverer.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SchemasDiscoverer.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SchemasDiscoverer.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchemasDiscoverer.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SchemasDiscoverer.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SchemasDiscoverer.prototype, "tagsAllInput", {
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
    SchemasDiscoverer.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            source_arn: cdktf.stringToTerraform(this._sourceArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SchemasDiscoverer.tfResourceType = "aws_schemas_discoverer";
    return SchemasDiscoverer;
}(cdktf.TerraformResource));
exports.SchemasDiscoverer = SchemasDiscoverer;
