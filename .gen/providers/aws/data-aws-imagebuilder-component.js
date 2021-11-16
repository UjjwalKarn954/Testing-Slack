"use strict";
// https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html
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
exports.DataAwsImagebuilderComponent = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html aws_imagebuilder_component}
*/
var DataAwsImagebuilderComponent = /** @class */ (function (_super) {
    __extends(DataAwsImagebuilderComponent, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html aws_imagebuilder_component} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderComponentConfig
    */
    function DataAwsImagebuilderComponent(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_imagebuilder_component',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._arn = config.arn;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "changeDescription", {
        // change_description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('change_description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "data", {
        // data - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('data');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "dateCreated", {
        // date_created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date_created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "encrypted", {
        // encrypted - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('encrypted');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "kmsKeyId", {
        // kms_key_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "supportedOsVersions", {
        // supported_os_versions - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('supported_os_versions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsImagebuilderComponent.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsImagebuilderComponent.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsImagebuilderComponent.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsImagebuilderComponent.tfResourceType = "aws_imagebuilder_component";
    return DataAwsImagebuilderComponent;
}(cdktf.TerraformDataSource));
exports.DataAwsImagebuilderComponent = DataAwsImagebuilderComponent;
